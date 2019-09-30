<script>
  export let entry;
  export let collectionName;
  $: fields = Object.entries(entry);
</script>

<style>
  .field > * {
    display: inline-block;
  }
  .field label {
    width: 5em;
  }
</style>

<div class="content">
  <h3>{entry.title || entry.name}</h3>
  <form>

    {#each fields as value, field}
      <div class="field">
        <label>{value[0]}</label>
        <input bind:value={value[1]} type="text" />
      </div>
    {/each}
  </form>
  <div class="buttons">
    <a href={'/admin/crud/' + collectionName + '/' + entry.id}>Back</a>
  </div>

</div>
