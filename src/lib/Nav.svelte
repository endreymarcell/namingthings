<script lang="ts">
  import "../global.css";
  import Footer from "./Footer.svelte";
</script>

<div id="header-container">
  <header>
    <div id="title-container">
      <a href="/">
        <h1>Naming</h1>
        <h1>Things</h1>
        <h1>is Hard</h1>
      </a>
    </div>
    <nav>
      <div>
        <a href="/">Feed</a>
      </div>
      <div>
        <a href="/about">About</a>
      </div>
    </nav>
  </header>
  <Footer positionClass="sidebar-footer" />
</div>

<style>
  * {
    --padding: 8px;
    --border-width: 4px;
  }

  #header-container {
    width: calc(100% - 2 * var(--padding));
    padding: var(--padding);
  }

  header > * {
    width: calc(100% - 2 * var(--border-width));
  }

  #title-container {
    border-width: var(--border-width);
    border-bottom-width: 0;
    border-style: solid;
    border-color: black;

    background-color: #ddd;
  }

  #title-container a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  h1 {
    margin-block: 0.5rem;
    color: black;
  }

  nav {
    height: 2rem;
    text-align: center;
    border-color: var(--accent);
    border-width: 0 4px 4px 4px;
    border-style: solid;
    font-family: var(--font-title);
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  @media screen and (min-width: 600px) {
    #header-container {
      max-width: 300px;
    }

    #title-container a {
      flex-direction: column;
      padding-block: 1rem;
    }

    h1 {
      margin: 0.1rem;
      font-size: 3.5rem;
    }

    nav {
      height: initial;
      font-size: 1.6rem;
      flex-direction: column;
      gap: 0.7rem;
      padding-block: 1rem;
    }

    nav > div:hover {
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 5px;
    }
  }
</style>
