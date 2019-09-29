<style>
  nav {
    position: absolute;
    height: 40px;
    background: #333;
    padding: 0.4em 2em;
    color: white;
    width: 100%;
    box-sizing: border-box;
  }
  nav a {
    color: white;
  }
  main {
    position: absolute;
    top: 40px;
    bottom: 0;
    right: 0;
    left: 0;

    overflow: auto;
  }
</style>

<nav>
  <a href="/admin">Index</a>
  |
  <a href="/admin/crud">CRUD</a>

</nav>

<main>
  <slot>
    <!-- optional fallback -->
  </slot>
</main>
