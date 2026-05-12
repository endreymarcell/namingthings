---
title: Tailwind is the death of CSS
pubDate: 2023-09-11
excerpt: The popularity of Tailwind might be a sign of just how misguided CSS itself is.
layout: ../../layouts/BlogPost.astro
---

Tailwind is intensely debated, and I'm not going to try to add to that noise here.
(Although let me bring this up: the fact that [the official website claims](https://tailwindcss.com/docs/reusing-styles#multi-cursor-editing) duplicating styles is not really an issue,
since modern text editors support multi-cursor editing... well, it tells me that we have a very different idea of how the world works.)

However, touting not having to write CSS by hand as an advantage very much reminds me of my last couple of years at [Prezi](https://prezi.com).
After years on years of initiatives trying to make the presentation editing experience more intuitive and seamless,
at some point it became the stated objective of leadership to simply _not let users into the editor_.
Instead, we tried to give them all kinds of other ways to create a presentation, such as auto-generating it from a bullet list.
To me, this signalled that we have given up on our product and admitted defeat: the Prezi editor is just too difficult
to use for the average customer, so let's shield people from that experience.

This is what Tailwind feels like to me: it's really putting a spotlight on the fact that CSS is too low-level of a language
for most use-cases. It is simply not useful or practical to have access to all of these properties and be able to set them
to any valid value, and developers appreciate being able to use 'instructions' or 'presets' that are one level higher than CSS rules.
I can easily imagine a world where CSS will not be handwritten by developers anymore, it'll just be the thing that
Figma generates when you press Export.
