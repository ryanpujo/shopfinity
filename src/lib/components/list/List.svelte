<script lang="ts">
import ListItem from "./ListItem.svelte";
let clazz = '';
export {clazz as class};
</script>

<nav class="list-nav">
  <ul class={clazz}>
    <slot />
  </ul>
</nav>