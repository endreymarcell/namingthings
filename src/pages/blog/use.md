---
title: A truly awful name for a function
pubDate: 2022-11-13
excerpt: "RFC: first-class support for confusion in React"
layout: ../../layouts/BlogPost.astro
---

I still haven't managed to get over my astonishment that this [planned new React hook](https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md) is called `use()`. Did anyone really think this was a good idea?

This name manages to be bad on so many levels:

1. **Descriptiveness.** "Use" is about as specific as "data".
2. **Lookup.** How are you ever supposed to find docs/articles for something whose name is both a very short and basic English verb and also the prefix of literally every other (built-in _and_ custom) React hook?
3. It's even a **circular reference.** According to the RFC, the name cannot be more specific because _Promises are not the only "usable" type_ (sic): in the future, you will (should (might)) be able to `use` context, or maybe even some store or observable objects. So what can be used with `use`? Well, the "usable" types. What are those "usable" types? Well... you know... all the things you can use with `use`.

OK, I think I'm done venting now. Time to look into the actual usage.
