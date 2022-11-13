---
title: "Out with eslint, in with Prettier"
date: 2022-11-13
excerpt: If you had asked me a couple of years ago about setting up a new JavaScript project, I would definitely have listed eslint as one of the necessary tools for development. I don't anymore.
---

If you had asked me a couple of years ago about setting up a new JavaScript project, I would definitely have listed eslint as one of the necessary tools for development.
I don't anymore.  

## Linting

One of the main use cases - and indeed the original use case - for linters is to detect mistakes that the programmer does.
The type of code a linter would flag is one that is technically valid, but most likely does something else than what you intended.
A related genre of linter violations is using features of a language that are generally viewed as bad practices or footguns and should be avoided.
(This is especially useful for JavaScript which, as we all now, comes with a lot of pitfalls due to its inception and heritage.)
Looking at these types of use cases for using linters,
it could be that my decision has to do with the number of years for which I've been working with JavaScrip: I find that these use cases don't really hold value for me anymore.

The one ruleset that I really do use often is the [react-hooks plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks).
The `exhaustive-deps` rule is useful because I can use it to make the editor do the typing instead of me (by auto-fixing the violation),
although I can't help but think that the whole dependency listing is a code smell and huge usability pain with hooks.
(I also think `useEffect()` should really only be used for when you need to interact with the DOM upon mounting/dismounting a component, such as adding and removing event listeners, and for nothing else - but that's a whole other blog post in itself.)
And the `rules-of-hooks` rule is useful because it reminds me of the extremely counterintuitive limitations that using hooks imposes on your code, such as the fact that you cannot return early from a function component until you've made all your calls to all your hooks.
This design is so bad that I keep forgetting it just to shield myself from the annoyance, and so the linter comes in handy to remind me.
Then again, if I write a project for my own sake, I do not do it in React, and so these linter rules are also off the table.

Finally, there's also the use case of enforcing conventions in a team/organization that's big enough for word-of-mouth and spontaneous agreements to not work anymore.
I do actually think that consistency in arbitrary code style decisions
(such as file/symbol naming conventions or where alternate syntax versions are available for the same thing)
is valuable - not because one solution is necessarily better than the other,
but putting all these discussions to rest is more important than choosing the best solution in each case.
And not having to think is always a great bonus.
Which is also why I like this line from The Zen of Python: 
> There should be one-- and preferably only one --obvious way to do it.


## Formatting

And on the topic of not having to argue and not having to think: automated code formatters are a godsend.
I am a person who can be picky about the specifics of code formatting, but ever since I've gotten used to having my code automatically formatted for me whenever I hit Save, I don't think I can ever go back.
There's nothing more menial than having to indent or dedent lines of code,
and no minute wasted as badly as the one you spent pondering if you should wrap this statement in two lines or leave it on one.
I never ever want to have to care about things like this again.
(As a funny aside, I stopped having an opinion on writing or omitting statement-closing semicolons in JavaScript.
Frankly, _I don't even know_ if the codebases I'm working on use or omit semicolons.
I don't have to. Prettier does.)

I'd like to take this occasions to react to some of the points Anthony Fu makes in his blog post titled [Why I don't use Prettier](https://antfu.me/posts/why-not-prettier).

In my opinion, the fact that Prettier is highly opinionated is great, and makes it much more usable than other tools.
If only I could have all the time back that I have spent fiddling with ESLint configurations!
You might say I should just choose a ruleset and be done with it, but now I have another problem: which ruleset do I choose?
(Cue xkcd comic about competing standards.)
Especially for those who are new to JavaScript, this is just another source of confusion.
In his blog post, Anthony states that

> Opinionated essentially means it’s not for everyone.

I respectfully disagree.
I think opinionated means exactly the opposite: it's for everyone.
It's both for those who could also form their own informed decisions, and for those who are not able to do that (yet).

As for the [line wrapping noise](https://antfu.me/posts/why-not-prettier#the-line-wrapping-noise) Anthony mentions, I agree that this is an unfortunate phenomenon with no real good solution, but this hasn't got much to do with Prettier.
The fact is that when you keep adding items to some kind of list, at some point you'll want to wrap it into a new line.
The only reason to avoid that is to always start with a multi-line format, even for a single item, and I think we all agree we don't want that.
But if that's the case, you'll always have a point where you'll need to wrap the line, and that will cause noise in your diff.
Now, if you do this wrapping yourself, you can get out of some of the cases, but you are only delaying the inevitable.
And the price you pay for that is that now you have to do the line-wrapping by yourself.
So instead of thinking about what your code does, now you're thinking about newlines.
Is that really the best use of your time?

And this applies in general.
Yes, I agree that in certain cases, the code that Prettier produces is actually less readable/consistent than the raw version.
Yes, [this example](https://prettier.io/playground/#N4Igxg9gdgLgprEAuc0DOMAEBXNcBOamAvJgNoA6UmmwOe+AkgCZKYCMANPQVAIYBbOGwogAggBsAZgEs4mAMJ98QiTJh9RmAL6cqNOrgIs2AJm5H8-ISJABxGf0wAlCGgAWfKFt37aPJlZMAGYLBmthTFEAZXdsAHNMADk+ACNsHz1qf0sTTAAWMN5BSNFnPncBL0wAMXw+Bky-QwY8gFYiqxLbABU3d3kAGQBPbFSEJuyW4yCANk6I22iCeJkIZJkJCCllSYBdAG4qEE4QCAAHGDWoNGRQZXwIAHcABWUEW5Q+CSe+YdvTql6mAANZwGDREqDRxwZA7CR4QHAsEQ858MCOeLIGD4bBwU5wATjZjMODMQZeeLYPjxOA1CAqPgwK5QLFfbAwCAnEDuGACCQAdXc6jgaDRYDgyxu6hkADd1MNkOA0ACQI4GDAXvV4lU4d9ESAAFZoAAe0UxEjgAEVsBB4HqEfiQGjCAQlak0nAJNzzvhHDABTJmDB3Mh8uZnY88AL6uclb7RQRZbDTgBHW3wLUXT4gBoAWigcDJZO5+Dg6ZkZa1NN1SHhBrwAhk2NxTrQFutGdhdf1To0qUDwdDSAjOL4m0xCggAlrIFFbW5Rh6aU+9adsrxjCgpNg0TAfsuYm30Rgw0tDrw2m0QA) demonstrates this well.
But at the end of the day, the value of never having to think about formatting - not when writing the code, not when reviewing a Pull Request, never - is worth so much more than those couple of cases.

> The real pain point is that this behavior is not optional. You can’t disable it completely.

That's not the pain point; that's the value proposition.

> The only workaround you can do is to use `// prettier-ignore`, which to me, the "all or nothing" choice loses the point of using Prettier in the first place.

Quite the opposite.
Using an automated code formatter to take care of your code's formatting but still going in there and adding exceptions yourself - that is what loses the point of using Prettier.

Do not micro-manage your formatter.
Delegate formatting fully to it, and you can let go of the worry of code formatting once and for all.
For that is indeed a joyful experience.

## Conclusion

For the record, I am not proposing that linters have no value.
But in personal project that I work on by myself, I have not installed a linter in years.
However, setting up Prettier (or an equivalent) is among the very first things I do.
