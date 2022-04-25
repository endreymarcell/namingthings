<script lang="ts">
  import "../global.css";
</script>

<nav>
  <img src="/img/coding-profile.jpg" alt="Marca coding" />
  <h2>Marca's blog</h2>
  <section>Hi, I am Marca and this is my blog.</section>
  <ul>
    <li>
      <a href="/">Link 1</a>
    </li>
    <li>
      <a href="/">Link 1</a>
    </li>
  </ul>
</nav>

<style>
  nav {
    text-align: center;
    border-bottom: 1px solid black;
  }

  nav img {
    max-width: 100%;
  }

  ul {
    list-style-type: none;
  }

  @media screen and (min-width: 600px) {
    nav {
      padding: 1rem;
      text-align: right;
      border: none;
    }
  }
</style>
