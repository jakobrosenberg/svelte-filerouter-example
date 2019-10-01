<script>
  import * as stores from "../../../../stores";
  import List from "./list.svelte";
  import { crossfade } from "svelte/transition";

  // export let scoped;
  export let route;

  let collection = [];

  $: collectionName = route.params.collection;
  $: collectionStore = stores[collectionName];
  $: collection = $collectionStore;

  const [send, receive] = crossfade({ duration: 200 });
</script>

<div>
  <!-- {JSON.stringify(scoped)} -->
  <!-- List of items (comments, posts, etc.) -->
  <List {collection} {collectionName} {send} {receive} {route} />
  <!-- modal -->
  <slot scoped={{ collection, collectionName, send, receive }} />
</div>
