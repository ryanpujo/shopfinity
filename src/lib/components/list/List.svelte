<script lang="ts">
import ListItem from "./ListItem.svelte";
</script>

<nav class="list-nav">
  <ul>
    <slot {ListItem}/>
  </ul>
</nav>