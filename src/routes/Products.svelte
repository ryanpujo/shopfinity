<script lang="ts">
import type { Product } from "$lib";
import ProductCard from "$lib/components/ProductCard.svelte";
	import Carousel from "$lib/components/carousel/Carousel.svelte";
import productsStore from "$lib/stores/productsStore";
	import { CardPlaceholder } from "flowbite-svelte";
	import { onMount } from "svelte";
export let category: string;
let products: Product[];
let clazz = "";
export {clazz as class};
onMount(() => {
	let i = 0;
	products = $productsStore.filter((product) => {
		if (i > 4) return;
		return category === product.category;
	});
});
</script>



<Carousel let:Item class="pt-4 pb-10">
	{#if !products}
		<CardPlaceholder />
		<CardPlaceholder />
		<CardPlaceholder />
		<CardPlaceholder />
		<CardPlaceholder />
	{:else}
	{#each products as product}
		<Item>
			<ProductCard class="" {product} />
		</Item>
	{/each}
	{/if}
</Carousel>

<style>

</style>