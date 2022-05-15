<script lang="ts">
  import type { Article } from "./content";
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

  import Meta from "./Meta.svelte";

  export let article: Article;
</script>

<h2>{article.title}</h2>
<Meta publishDate={article.publishDate} />
{@html documentToHtmlString(article.content)}

<style>
  h2 {
    text-decoration: underline;
    text-decoration-color: var(--entity);
    text-decoration-thickness: 6px;
    text-underline-offset: 6px;
    margin-bottom: 0;
  }

  p {
    line-height: 28px;
  }

  p + p {
    margin-top: 2rem;
  }

  p > b {
    margin-inline: 2rem;
    font-size: 1.2rem;
    color: var(--entity);
  }
</style>
