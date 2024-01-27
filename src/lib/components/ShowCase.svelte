<script lang="ts">
	import Products from "./Products.svelte";

  export let title: string;
  export let copyWrite: string;
  export let category: string;
</script>

<div class="md:mx-10 mx-4 mt-10">
  <h3 class="h6">{title}</h3>
  <div class="flex items-center justify-between">
    <p class="font-bold h5 md:h4">{copyWrite}</p>
    <a href="/" class="variant-filled-secondary btn btn-sm">View all</a>
  </div>
  <Products category={category} class="pt-4 pb-10" />
</div>