<script>
  export let collection;
  export let collectionName;
  export let send;
  export let receive;
  export let route;
  $: console.log("collection in list", collection);
</script>

<style>
  .entries {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .entry-container {
    flex: 1;
    padding: 1em;
  }
  .entry {
    position: relative;
    height: 260px;
    width: 260px;
    background: white;
    padding: 0.1em 1em;
    /* box-sizing: border-box; */
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }
  .reference-box {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: white;
  }
</style>

<div class="content">
  <h1>{collectionName}</h1>
  <div class="entries">
    {#each collection as entry}
      <div class="entry-container">
        <a href="/admin/crud/{collectionName}/{entry.id}">
          <div class="entry">
            <h4>{entry.title || entry.name}</h4>
            <span>{entry.body || entry.email || ''}</span>
            {#if route.params.id != entry.id}
              <div
                class="reference-box"
                in:receive={{ key: 'modal-' + entry.id }}
                out:send={{ key: 'modal-' + entry.id }} />
            {/if}
          </div>

        </a>
      </div>
    {/each}
  </div>
</div>
