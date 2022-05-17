<script lang="ts">
  import type { FeedEntry } from "$lib/content";

  import Feed from "$lib/Feed.svelte";
  export let feed: FeedEntry[] = [];
</script>

<main>
  <Feed {feed} />
</main>
