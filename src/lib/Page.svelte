<script lang="ts">
  import type { Article } from "./content";
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

  import Meta from "./Meta.svelte";

  export let article: Article;
</script>

<h2>{article.title}</h2>
<Meta publishDate={article.publishDate} />
<main>
  {@html documentToHtmlString(article.content)}
</main>
<section />

<style>
  h2 {
    text-decoration: underline;
    text-decoration-color: var(--entity);
    text-decoration-thickness: 6px;
    text-underline-offset: 6px;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 600px) {
    section {
      height: 5rem;
    }
  }
</style>
