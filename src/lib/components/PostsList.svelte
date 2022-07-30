<script>
  export let posts = [];
</script>

<ul class="posts-list">
  {#each posts as post}
    <li>
      <article>
        <a href="/blog/{post.slug}">
          <h2>
            {post.title}
          </h2>
        </a>
      </article>

      <p>{post.excerpt}</p>
    </li>
  {/each}
</ul>

<style>
  p {
    text-indent: 0;
    margin-left: 0;
  }
</style>
