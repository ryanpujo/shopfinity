<script lang="ts">
	import { Search, Button, Label, Range } from "flowbite-svelte";

  let value = 0
</script>

<section class="variant-ghost p-4">
  <Search>
    <Button>Search</Button>
  </Search>
  <div class="mt-10">
    <Label>Min Price</Label>
    <Range id="minprice" min="0" max="10000" bind:value />
    ${value}
  </div>
</section>