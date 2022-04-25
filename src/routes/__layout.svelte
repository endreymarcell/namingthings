<script lang="ts">
  import Nav from "$lib/Nav.svelte";
  import "../global.css";
</script>

<div id="container">
  <Nav />
  <main>
    <slot />
  </main>
</div>

<footer />

<style>
  #container {
    display: grid;
    grid-template-columns: 1fr;
    background: linear-gradient(to top right, rgb(249, 250, 245), rgb(251, 251, 250));
  }

  main {
    padding: 1rem;
    max-width: 700px;
  }

  @media screen and (min-width: 600px) {
    #container {
      grid-template-columns: minmax(200px, 300px) auto;
    }
  }
</style>
