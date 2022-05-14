<script lang="ts">
  import Nav from "$lib/Nav.svelte";
  import "../global.css";
  import "../theme.css"
</script>

<div id="container" class="theme-ayu-light theme-shared-typography">
  <Nav />
  <main>
    <slot />
  </main>
  <footer></footer>
</div>


<style>
  #container {
    display: grid;
    grid-template-columns: 1fr;
    background: var(--bg-main);
    font-family: var(--font-body);
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

  footer {
    border-top: 4px solid var(--accent);
    height: 0;
  }
</style>
