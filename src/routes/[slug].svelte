<script lang="ts">
  import type { Article } from "$lib/content";

  import Page from "$lib/Page.svelte";
  export let article: Article;
</script>

<Page {article} />
