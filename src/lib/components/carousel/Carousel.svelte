<script lang="ts">
import Item from './Item.svelte';
let clazz = "";
export {clazz as class};
</script>

<div class={"snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-6 overflow-x-auto justify-between " + clazz}>
  <slot {Item}/>
</div>