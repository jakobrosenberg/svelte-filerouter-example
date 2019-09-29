<script>
  import * as stores from "../../../../stores";

  let collection = [];

  $: collectionStore = stores.photos;
  $: collection = $collectionStore;
  $: smallCollection = collection.slice(0, 50);
</script>

<style>
  img {
    /* max-width: 500px; */
    max-width: 100%;
  }
  .card {
    width: 300px;
    background: white;
    padding: 5px;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    margin-right: 10px;
  }
  .photos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>

<div class="content">
  <h1>Photos</h1>
  <div class="photos">
    {#each smallCollection as entry}
      <div class="card">
        <img src={entry.url} alt="" />
        <div>{entry.title}</div>
      </div>
    {/each}
  </div>
</div>
