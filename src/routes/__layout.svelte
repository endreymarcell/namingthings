<script lang="ts" context="module">
  export const load: Load = ({ url }) => {
    return {
      props: {
        isAboutPage: url.href.includes("about"),
      },
    };
  };
</script>

<script lang="ts">
  import Nav from "$lib/Nav.svelte";
  import "../global.css";
  import "../theme.css";
  import Footer from "../lib/Footer.svelte";
  import type { Load } from "@sveltejs/kit";

  export let isAboutPage: boolean = false;
</script>

<svelte:head>
  <title>Naming Things</title>
  <meta name="description" content="Naming things is hard: a blog about software engineering" />
</svelte:head>

<div id="container" class="theme-ayu-light theme-shared-typography">
  <Nav {isAboutPage} />
  <main>
    <slot />
  </main>
  <Footer positionClass="bottom-footer" />
</div>

<style>
  #container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: var(--bg-main);
    font-family: var(--font-body);
  }

  main {
    padding: 8px 1rem;
    max-width: 700px;
  }

  @media screen and (min-width: 600px) {
    #container {
      flex-direction: row;
    }
  }
</style>
