<script>
  import MainNav from "./MainNav.svelte";
  import { siteAuthor } from "$lib/config";
</script>

<footer>
  <nav>
    <ul>
      <li>
        A blog about the hard parts of software engineering.
        <div class="copyright">&copy;{new Date().getFullYear()} {siteAuthor}</div>
      </li>
    </ul>
  </nav>
  <MainNav />
</footer>

<style>
  .copyright {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
</style>
