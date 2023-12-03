<script lang="ts">
	import productsStore from "$lib/stores/productsStore";
	import ShowCase from "../../lib/components/ShowCase.svelte";
	import type { PageData } from "./$types";

  export let data: PageData;
  productsStore.set(data.products);
</script>

<section>
  <ShowCase 
    category="laptops"
    copyWrite="Pick your best bet"
    title="Laptops"
  />
  <ShowCase 
    category="smartphones"
    copyWrite="Choose what your hand should hold"
    title="Smartphones"
  />
  <ShowCase 
    category="groceries"
    copyWrite="Eat nice to live nice"
    title="Groceries"
  />
  <ShowCase 
    category="home-decoration"
    copyWrite="Put things wisely in your home"
    title="Home Decoration"
  />
</section>