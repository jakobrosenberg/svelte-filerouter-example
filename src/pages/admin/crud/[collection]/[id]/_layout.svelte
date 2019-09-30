<script>
  import { fade } from "svelte/transition";
  export let collectionName;
  export let collection;
  export let route;
  export let send;
  export let receive;

  $: id = route.params.id;
  $: entry = collection.filter(col => col.id == id)[0] || {};

  function goBack() {
    history.pushState({}, "", "/admin/crud/" + collectionName);
  }
</script>

<style>
  .overlay,
  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .background {
    background: black;
    opacity: 0.3;
  }

  .modal {
    position: fixed;
    height: 30em;
    width: 50em;
    top: 50%;
    left: 50%;
    margin-top: -15em;
    margin-left: -25em;
    background: white;
    -webkit-box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.3);
  }

  :global(.buttons) {
    position: absolute;
    bottom: 3em;
    right: 3em;
  }
</style>

<div class="overlay">
  <div
    class="background"
    on:click={goBack}
    transition:fade={{ duration: 200 }} />
  <div
    class="modal"
    in:receive={{ key: 'modal-' + id }}
    out:send={{ key: 'modal-' + id }}>
    <slot scoped={{ entry, collectionName }} />
  </div>
</div>
