<script lang="ts">
  export let publishDate: string;
</script>

<section class="meta">
<!--  <img class="avatar" alt="Marca" src="/img/profile-xs.png" />-->
  <span>
    <a href="/about">Marca</a>
    <span>at</span>
    <time datetime={publishDate.substring(0, 10)}>{publishDate}</time>
  </span>
</section>

<style>
  .meta {
    font-family: var(--font-sans);
    font-size: 0.9rem;
    font-style: italic;
    color: var(--text-muted);
    font-weight: 300;
    height: 32px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .meta a {
    font-weight: 300;
    font-style: initial;
  }

  img.avatar {
    width: 20px;
    height: auto;
    border-radius: 2px;
  }
</style>
