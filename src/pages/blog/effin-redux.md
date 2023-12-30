---
title: Introducing effin-redux
pubDate: 2023-10-14
excerpt: Yet another side effect handling library for redux
layout: ../../layouts/BlogPost.astro
---

We used to have a running joke in Prezi that nobody was a proper senior frontend developer until they've rolled
their own flavour of a redux side effect handling implementation.
So here I am, many years later, finally graduating with [effin-redux](https://github.com/endreymarcell/effin-redux).

<hr>

Wait, is redux still a thing in 2023?
<br>
Well, on the one hand, yes, it's still there in lots and lots of codebases, see
[the State of Frontend report from last year](https://tsh.io/state-of-frontend/#over-the-past-year-which-of-the-following-libraries-have-you-used-and-liked).
<br>
On the other hand, no, as in:
you'd be hard-pressed to find someone actually recommending that you add redux to any new or existing project.
<br>
(Note that in the survey linked above, 'used and disliked' is considerably higher for redux than 'used and liked')

Nevertheless, I did choose to add redux to the SPA my team is working on,
because I deemed it our best chance to get out of the bowl of state handling spaghetti we had on our hands.
Further arguments included the fact that the codebase already used a redux-ish pattern in some places,
and that I knew using redux would make it relatively easy for others in the team/company to understand the codebase.

<hr>

For starters, I believe [redux-toolkit](https://redux-toolkit.js.org/) actually gets many things right...
but side effects only half-right.
Its thunk-based approach combined with automatically creating `pending`, `fulfilled` and `rejected` actions is quite alright.

What bothered me is that even though redux does an excellent job in moving all the business logic decisions out of components and into the reducer,
it fails to do that for side effects.
That's an oversight.
Event handlers in components should dispatch the corresponding action, and the reducer should decide if it should trigger a side effect or not.
[Redux-loop got this right](https://redux-loop.js.org/), mostly because it was inspired by [Elm](https://elm-lang.org/),
but it's not compatible with redux-toolkit.

So I just had to write my own implementation, didn't I? 🤷‍

The exact technical solution is different, but the idea is the same:
the reducer returns the new `state` object *as well as any side effects that should be run as a result of that action.*
The side effects themselves are defined using the same async thunks that RTK has, with a little bit of helper syntax around them.
Oh yeah, and I call them 'effects'. Nobody is happy about the word 'thunk'. Me neither.

I had a lot of fun writing this library, and it was also quite the training in TypeScript.
My team and I have been using this in production for almost a year now, and it proved to be fit for purpose.

Disclaimer: there are definitely some type errors/inaccuracies kicking around still, see the [open issues](https://github.com/endreymarcell/effin-redux/issues).
Also, once we finally get partial argument type inference in TypeScript, some of the functions will get nicer.