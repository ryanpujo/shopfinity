<script lang="ts">
	import type { Product } from "$lib";

	import productsStore from "$lib/stores/productsStore";
	import Carousel from "./carousel/Carousel.svelte";
	import { onMount } from "svelte";
	import ProductCard from "./ProductCard.svelte";
	import { CardPlaceholder } from "flowbite-svelte";
export let category: string;
let products: Product[];
let clazz = "";
export {clazz as class};
onMount(() => {
	products = $productsStore.filter((product) => {
		return category === product.category;
	});
});
</script>



<Carousel let:Item class={"pt-4 pb-10 " + clazz}>
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