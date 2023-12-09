<script lang="ts">
	import type { Product } from "$lib";

	import productsStore from "$lib/stores/productsStore";
	import Carousel from "./carousel/Carousel.svelte";
	import { onMount } from "svelte";
	import ProductCard from "./ProductCard.svelte";
	import Skeleton from "./Spinner.svelte";
export let category: string;
let products: Product[];
let clazz = "";
export {clazz as class};
products = $productsStore.filter((product) => {
		return category === product.category;
	});
</script>

<Carousel let:Item class={"pt-4 pb-10 " + clazz}>
	{#each products as product}
		<Item>
			<ProductCard class="" {product} />
		</Item>
	{/each}
</Carousel>

<style>

</style>