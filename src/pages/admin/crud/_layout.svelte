<style>
  .leftnav {
    position: fixed;
    background: white;
    width: 10em;
    height: 100%;
    padding: 1em;
    box-sizing: border-box;
  }
  .leftnav a {
    display: block;
  }
  main {
    margin-left: 10em;
    position: relative;
    min-height: 100%;
  }
</style>

<div class="leftnav">
  <a href="/admin/crud/posts">Posts</a>
  <a href="/admin/crud/comments">Comments</a>
  <a href="/admin/crud/users">Users</a>
  <a href="/admin/crud/photos">Photos</a>
  <a href="/admin/crud/albums">Albums</a>
</div>

<main>
  <slot />
</main>
