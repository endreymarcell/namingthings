<script lang="ts">
  import "../global.css";
</script>

<div id="sticky-heading">
  <h1>Naming Things is Hard</h1>
</div>
<nav>
  <div id="links">
    <div>
      <a href="/">Home</a>
    </div>
    <div>
      <a href="/">About</a>
    </div>
  </div>
</nav>

<style>
  #sticky-heading {
    text-align: center;
    position: fixed;
    width: calc(100% - 8px);
    background-color: #DDDDDD;
    border-style: solid;
    border-color: black;
    border-width: 4px 4px 0 4px;
  }

  h1 {
    font-family: var(--font-title);
    text-transform: uppercase;
    line-height: 1.1rem;
    font-weight: 300;
  }

  nav {
    margin-top: 3.8rem;
    text-align: center;
    border-color: var(--accent);
    border-width: 0 4px 4px 4px;
    border-style: solid;
    font-family: var(--font-title);
    text-transform: uppercase;
  }

  #links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-block: 1rem;
  }

  @media screen and (min-width: 600px) {
    nav {
      padding: 1rem;
      text-align: right;
      border: none;
    }
  }
</style>
