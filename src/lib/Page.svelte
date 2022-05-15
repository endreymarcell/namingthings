<h2>Just because you like it doesn't mean it's good for you</h2>

<section class="meta">
  <img class="avatar" alt="Marca" src="/img/profile.png" />
  <span>
    <a href="https://twitter.com/matthew_d_green">Marca</a>
    <span>at</span>
    <time datetime="2022-05-15">2022-05-15</time>
  </span>
</section>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo nisl ac pellentesque sagittis. Suspendisse
  dictum feugiat nunc, at posuere augue tincidunt eget. Suspendisse neque metus, faucibus eu lacus sed, laoreet feugiat
  urna. In hac habitasse platea dictumst. Nunc eu faucibus mauris, sed dictum tellus. Pellentesque habitant morbi
  tristique senectus et netus et malesuada fames ac turpis egestas. Nulla ac accumsan velit. Vestibulum purus magna,
  iaculis ac maximus vel, rutrum nec nisl. Fusce ac sagittis nulla. Nulla eget elit massa. Donec interdum elit vitae
  risus accumsan ultrices. Morbi venenatis purus sed eros pellentesque, a posuere ipsum imperdiet. Praesent sagittis
  libero non congue feugiat.
</p>

<p>
  Curabitur rutrum sollicitudin fringilla. Mauris eget ultricies turpis. Phasellus ultricies ante eu lectus aliquam,
  rutrum fermentum dolor maximus. Vivamus pellentesque nisi erat, in consectetur dui suscipit a. Class aptent taciti
  sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi enim metus, faucibus nec eleifend
  dapibus, tristique eget eros. Nulla sed cursus elit, a ultricies erat. In hac habitasse platea dictumst. Nam efficitur
  est nibh, eu semper velit porta a. Phasellus sit amet augue a nunc ullamcorper rutrum vel eu leo. Donec euismod sem
  quis massa fringilla cursus. Suspendisse et convallis sapien, a porttitor ante. Sed sit amet nunc eu tortor molestie
  pretium id sed quam. Mauris et commodo lacus, vitae vulputate felis. Duis porttitor tristique augue eu porta.
  Phasellus in pharetra tortor.
</p>

<p>SvelteKit is a framework for building extremely high-performance web apps.</p>

<p>
  Building an app with all the modern best practices is fiendishly complicated. Those practices include build
  optimizations, so that you load only the minimal required code; offline support; prefetching pages before the user
  initiates navigation; and configurable rendering that allows you to generate HTML on the server or in the browser at
  runtime or at build-time. SvelteKit does all the boring stuff for you so that you can get on with the creative part.
</p>

<p>
  It uses Vite with a Svelte plugin to provide a lightning-fast and feature-rich development experience with Hot Module
  Replacement (HMR), where changes to your code are reflected in the browser instantly. You don't need to know Svelte to
  understand the rest of this guide, but it will help. In short, it's a UI framework that compiles your components to
  highly optimized vanilla JavaScript. Read the introduction to Svelte blog post and the Svelte tutorial to learn more.
</p>

<style>
  h2 {
    text-decoration: underline;
    text-decoration-color: var(--entity);
    text-decoration-thickness: 6px;
    text-underline-offset: 6px;
    margin-bottom: 0;
  }

  .meta {
    font-family: var(--font-sans);
    font-size: 0.9rem;
    font-style: italic;
    color: var(--text-muted);
    font-weight: 300;
    height: 32px;
    display: flex;
    align-items: center;
    margin-block: 1rem;
    gap: 0.5rem;
  }

  .meta a {
    font-weight: 300;
    font-style: initial;
  }

  img.avatar {
    width: 20px;
    height: auto;
    border-radius: 2px;
  }

  p {
    line-height: 28px;
  }

  p + p {
    margin-top: 2rem;
  }
</style>
