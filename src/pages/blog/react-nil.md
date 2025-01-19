---
title: react-nil makes nil sense to me
pubDate: 2025-01-19
excerpt: I'm dumbfounded by this library.
layout: ../../layouts/BlogPost.astro
---

So there's this library called [react-nil](https://github.com/pmndrs/react-nil) that allows you to use React components
without them ever rendering anything.

Why though? According to the README,

> A component has a lifecycle, local state, packs side-effects into useEffect, memoizes calculations in useMemo, orchestrates async ops with suspense, communicates via context, maintains fast response with concurrency. And of course — the entire React eco system is available.

My friend, _those are the bad parts of React_.

Why anyone would willingly hamstring themselves with things like the [rules of hooks](https://react.dev/reference/rules/rules-of-hooks) or think suspense is a reasonable choice for orchestrating async operations is beyond me.

Shoehorning React into places where it doesn't belong reminds me of [ink](https://github.com/vadimdemedes/ink),
but hey, at least ink is actually rendering some UI.

<hr>

When I was doing my CS degree at the Technical University, a wiki was already set up by previous generations of students
that allowed us to share materials with each other.

The students at the other university though, where I was studying humanities, were less tech-savvy.
As a result, what we had there was a bunch of Gmail accounts whose credentials were circulating in Facebook groups.
People would share materials by logging in to one of the accounts, and sending an email to its own address with the files
added as attachments. Not even Google Drive - Gmail.

As cringeworthy as it was, it made sense. They didn't know any better, and they wanted to make it work somehow.
Gmail wasn't created for this, but they could piggyback on it, so they did.

This is very much how I feel about react-nil.
It lets people reach for React in spite of never wanting to render anything,
simply because this is what they are familiar with...

My mind is blown, and not in a good way.
