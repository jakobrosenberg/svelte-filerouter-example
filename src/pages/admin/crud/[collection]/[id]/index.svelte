<script>
  export let entry;
  export let collectionName;
</script>

<div class="content">
  <h2>{entry.title || entry.name}</h2>
  <div>{entry.body || entry.email || ''}</div>
  <div class="buttons">
    <a href={'/admin/crud/' + collectionName + '/' + entry.id + '/edit'}>
      Edit
    </a>
  </div>
</div>
