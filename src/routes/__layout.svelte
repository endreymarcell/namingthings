<script lang="ts">
  import Nav from "$lib/Nav.svelte";
  import "../global.css";
  import "../theme.css";
</script>

<svelte:head>
  <title>Naming Things</title>
  <meta name="description" content="Naming things is hard: a blog about software engineering" />
</svelte:head>

<div id="container" class="theme-ayu-light theme-shared-typography">
  <Nav />
  <main>
    <slot />
  </main>
  <footer />
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
    padding: 1rem;
    max-width: 700px;
  }

  footer {
    border-top: 40px solid var(--accent);
    height: 0;
  }

  @media screen and (min-width: 600px) {
    #container {
      flex-direction: row;
    }

    footer {
      border: 0;
    }
  }
</style>
