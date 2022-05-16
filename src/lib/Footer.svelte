<script lang="ts">
  export let positionClass = 'bottom-footer' | 'sidebar-footer';
</script>

<footer class={positionClass}>
  <img alt="Marcell Endrey" src="/img/profile-sm.png" />
  <div><i>Naming Things is Hard</i> is a blog by Marcell Endrey (Marca) about the hard parts of software engineering. Read more
    <a href="/about">here</a>.
  </div>
</footer>

<style>
  footer {
    padding: 1rem;
    border-top: 4px solid black;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  footer img {
    height: 80px;
    border-radius: 50%;
  }

  footer.sidebar-footer {
    display: none !important;
    flex-direction: column;
    border: 4px solid var(--accent);
    margin-top: 8px;
    line-height: 1.5rem;
  }

  footer.sidebar-footer img {
    display: none;
  }

  @media screen and (min-width: 600px) {
    footer {
      border: 0;
    }

    footer.bottom-footer {
      display: none !important;
    }

    footer.sidebar-footer {
      display: flex !important;
    }
  }
</style>
