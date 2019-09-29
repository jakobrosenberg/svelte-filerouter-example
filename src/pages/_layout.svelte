<script>
  let layoutName = "pages/_layout";
</script>

<style>
  :global(body) {
    background-color: #faaca8;
    background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
    background-attachment: fixed;
    padding: 0;
    height: 100%;
  }

  nav {
    width: 100%;
    position: fixed;
    height: 5em;
    background: white;
  }

  nav > * {
    padding: 0 1em;
    display: inline-block;
  }

  :global(.content) {
    padding: 1em;
  }

  main {
    position: fixed;
    top: 5em;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    overflow: auto;
  }
</style>

<nav>
  <h1>
    <a href="/">Svelte-filerouter</a>

  </h1>
  <h4>
    <a href="/about">About</a>
    |
    <a href="/admin/">Admin</a>
  </h4>
</nav>

<main>
  <slot scoped={{ layoutName }}>
    <!-- optional fallback -->
  </slot>
</main>
