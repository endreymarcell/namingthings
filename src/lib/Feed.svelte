<script lang="ts">
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
  import type { FeedEntry } from "$lib/content";

  import Meta from "$lib/Meta.svelte";

  export let feed: FeedEntry[] = [];
</script>

<div id="articles">
  {#each feed as { title, slug, publishDate, excerpt }}
    <a href={`/${slug}`} class="article-title">{title}</a>
    <Meta {publishDate} />
    <div class="excerpt">{@html documentToHtmlString(excerpt)}</div>
  {/each}
</div>

<style>
  a.article-title {
    color: var(--text-title);
    text-decoration: underline;
    text-decoration-color: var(--text-heading);
    text-decoration-thickness: 3px;
    text-underline-offset: 3px;
    font-size: 1.5rem;
  }

  div.excerpt {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 600px) {
    #articles {
      padding-top: 2rem;
      border-top: 5px solid var(--accent);
    }
  }
</style>
