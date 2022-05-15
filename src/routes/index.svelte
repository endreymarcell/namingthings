<script lang="ts">
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
  import type { FeedEntry } from "$lib/content";

  import Meta from "$lib/Meta.svelte";

  export let feed: FeedEntry[] = [];
</script>

<main>
  <div class="tagline">
    <span class="title">Naming Things is Hard</span> is a blog about software engineering by
    <span class="author">Marcell Endrey.</span> Read more <a href="/about">here</a>.
  </div>
  <div id="articles">
    {#each feed as { title, slug, publishDate, excerpt }}
      <a href={`/${slug}`} class="article-title">{title}</a>
      <Meta {publishDate} />
      <p class="excerpt">{@html documentToHtmlString(excerpt)}</p>
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
