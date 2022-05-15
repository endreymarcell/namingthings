<script lang="ts">
  import type { Article } from "./content";
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

  import Meta from "./Meta.svelte";

  export let article: Article;
</script>

<h2>Just because you like it doesn't mean it's good for you</h2>

<Meta publishDate={article.publishDate} />

{@html documentToHtmlString(article.content)}
