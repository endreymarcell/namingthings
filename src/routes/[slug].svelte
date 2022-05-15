<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";
  import fs from "fs";

  export const load: Load = async ({ params, fetch, session, stuff }) => {
    const fileContents = fs.readFileSync(`./articles/${params.slug}.md`);
    return {
      props: {
        article: fileContents,
      },
    };
  };
</script>

<script lang="ts">
  import Page from "$lib/Page.svelte";
  let article: string;
</script>

<pre>{article}</pre>

<Page />
