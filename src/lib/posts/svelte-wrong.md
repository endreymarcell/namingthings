---
title: What Svelte got wrong
date: 2022-07-13
excerpt: Just like many other folks, I quite enjoy using Svelte - heck, even this page is running on SvelteKit! Nevertheless, there are parts of the syntax where I respectfully disagree with the choices the team took.
---

Just like [many other folks](https://www.reddit.com/r/sveltejs/comments/owmnbr/svelte_is_stackoverflows_most_loved_web_framework/), I quite enjoy using Svelte - heck, even this page is running on SvelteKit!
Nevertheless, there are parts of the syntax where I respectfully disagree with the choices the team took.

I'm not talking about missing features. I'm talking about parts where the authors of Svelte made a decision about how
the language/framework should work, but I cannot get on board with their decision.

## Props are defined using `export let`

### How it works today

In Svelte, reactive variables are defined using `let`, just like ordinary JavaScript variables.
The compiler then sprinkles some magic onto your code so that when you change the value of the variable later on, variables derived from it are re-evaluated and components that depend on it are re-rendered.

However, if you stick an `export` keyword in front of your reactive variable, you've suddenly got a prop for yourself.
This behaves almost the same, except that now it can also be set by callers who are rendering your component.

#### Data flow

This is problematic for multiple reasons. One of them is that, at least in my view, it gives you the wrong idea about
which way the data is flowing in your application. Given two modules, `parent` and `child`, if `child` exposes a value using
`export`, you would naturally imagine that data is flowing from the child towards the parent. However, if the parent
component renders the child using something along the lines of `<Child prop={value} />`, you would be forgiven to think
that data (specifically `value`) is flowing from the parent towards the child. Indeed, it is the parent that is the owner
of this piece of data, and it is passing it to the child - so the `export` keyword is simply giving you the wrong idea.
In a [GitHub issue](https://github.com/sveltejs/svelte/issues/3454) dedicated to this topic, Rich Harris argues that

> It doesn't perfectly match the semantics of export in JavaScript modules, but it's the most appropriate verb since in both contexts 'export' means 'exposing a contract to the outside world', and any replacement would have its own issues.

This is a very reasonable answer, but let me still argue a bit. The contract that JavaScript's export keyword exposes
is "here, you can now _read_ this value" (ES6 module imports are read-only). This is not the same from Svelte's "here, you
can now set this value" contract. To be fair, Svelte also has an equivalent for the read-only contract: props defined
via `export const` - but that one is rarely used, even though that's the only one that actually aligns with ES6's idea
about imports and exports. It would be more accurate if rather than defining `export let count` and then setting this from
the outside, the child component would have something along the lines of `export const setCountProp(value);` this would be
consistent with how ES6 modules work.

React's approach is much more reasonable here: a component can only read its props, not modify them. It can modify its
state, but that's normally not accessible from the outside. Then again, React's philosophy is stricter than Svelte's
when it comes to who can modify what - think of the strictly unidirectional data flow of controlled input fields vs.
Svelte's two-way data binding.

### Counterintuitive behavior

Another problem here is that this syntax can lead to some extremely counterintuitive behavior. Consider the following
snippet in a Svelte component:

```typescript
export let count = 0;
if (count !== 0) {
  throw new Error("Impossible!");
}
```

Indeed, in JavaScript, it would not be possible to get into the condition body. The variable is clearly defined to be 0,
there's only a single thread that's executing, there's nothing that can jump in between the first and second lines. But
on Svelte, you can easily trigger this error by rendering this component and passing a value to `count` other than 0:

```tsx
<Counter count={42} />
```

That's all - you've got yourself a pretty little error. This is easily explained by looking at the code that Svelte
compiles from your source:

```typescript
function instance($$self, $$props, $$invalidate) {
  let { count = 0 } = $$props;
  if (count !== 0) {
    throw new Error('Impossible!');
  }
  // etc.
}
```

(See the [whole example here](https://svelte.dev/repl/0b6d90755f2943feadbb087f485edae3?version=3.49.0.))

What's going on here is that `count` is set to `$$props.count` if such a prop is defined, otherwise it is set to 0. This
makes sense, but this is not what you would expect when looking at the code you yourself wrote.
One of the advantages of Svelte compared to React is that the code you're writing is much closer to vanilla JavaScript -
if you need a reactive variable, you just define it with `let` and then change it with `=`, no need to mess around with that
`const [value, setValue] = useState();` stuff that React has, or the equivalent wrappers in other frameworks. As much as
we all love immutability, being able to represent a value that might change later on with the let keyword is like a
breath of fresh air. Be careful though - Svelte often seems like it has less magic than React, but as this example
shows, it actually often has more. And not always the good kind.

### Got any better ideas?

So how should Svelte props be defined instead? As has been pointed out, the solution has to be valid JavaScript, so we
cannot magically conjure up some new syntax. (Although it would appear to me that some parts of Svelte's syntax are not
valid JS, but I rest my case.) My recommendation would be the following:

```typescript
type Props = { count: number };
let { count } = getProps<Props>();
```

Provided that there's a declaration injected for `getProps<T>(): T`, this is valid, and it represents the idea much
better. (If it were up to me, I'd of course force `const` here instead of `let`, but let's just follow Svelte's philosophy
here.)

## Store values, rather than stores, are prefixed with `$`

Svelte's reactive variables only work within components. If you've got a piece of state that needs to be accessed by
multiple unrelated components, you need to create a store — basically a wrapper that holds a value and implements the
subscriber pattern.

The nice thing about stores is that Svelte provides some syntactic sugar around them: if you prefix the name of the
store with a dollar sign, you can interact with its value directly, and Svelte will handle the subscription/updating
logic for you. For example, if you've got a store like

```typescript
const count = writable(0);
```

then referencing the count variable will yield a store with its methods and all, but referring to `$count` will give you
the store's current value. You can even set/update the value of the store: a statement of `$count = 10;` will be
transpiled to `count.set(10);` behind the scenes. Handy!

But here's my point of contention: I believe that it should be the other way around. It would be more consistent if you
could access a store's value just by typing the store's name, and if you do need to refer to the store wrapper, you
prefix the name with a dollar sign to indicate that.

To demonstrate what I mean by consistency, consider this snippet:
```svelte
<script>
  import { secondsElapsed } from './stores.js';
  let numClicks = 0;
</script>

<div on:click={() => numClick++}>
  {$secondsElapsed} seconds have elapsed and you have clicked me {numClicks} times.
</div>
```

Why do you need the `$` for one reactive value but not for the other? The template syntax should not know or care if the value you're using was defined inside or outside the file. Either we say both of them should be used without the leading dollar sign, or we could say that every reference to reactive variables should actually be prefixed with a dollar sign to signal that there's a subscription mechanism in the background.

I might even go as for as to say that maybe all let variable declarations should just be transpiled into store creations... but I rest my case.

## Closing words

As for the rest of Svelte, I quite like it. Give it a spin — chances are, you will like it too.
