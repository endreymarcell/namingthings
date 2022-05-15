<script lang="ts">
  import Meta from "$lib/Meta.svelte";

  const pages = [
    { title: "Just because you like it doesn't mean it's good for you", slug: "good-for-you" },
    { title: "Better git command names", slug: "git-alias" },
  ];
</script>

<main>
  <div class="tagline">
    <span class="title">Naming Things is Hard</span> is a blog about software engineering by
    <span class="author">Marcell Endrey.</span> Read more <a href="/about">here</a>.
  </div>
  <div id="articles">
    {#each pages as { title, slug }}
      <a href={`/${slug}`} class="article-title">{title}</a>
      <Meta />
      <p class="excerpt">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo nisl ac pellentesque sagittis.
        Suspendisse dictum feugiat nunc, at posuere augue tincidunt eget. Suspendisse neque metus, faucibus eu lacus
        sed, laoreet feugiat urna.
      </p>
    {/each}
  </div>
</main>

<style>
  .tagline {
    margin-bottom: 2rem;
  }

  span.title {
    color: var(--accent);
  }

  a.article-title {
    color: black;
    text-decoration: underline;
    text-decoration-color: var(--entity);
    text-decoration-thickness: 3px;
    text-underline-offset: 3px;
    font-size: 1.5rem;
  }

  p.excerpt {
    margin-top: 0;
    margin-bottom: 2rem;
  }
</style>
