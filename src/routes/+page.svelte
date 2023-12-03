<script lang="ts">
	import productsStore from "$lib/stores/productsStore";
	import type { PageData } from "./$types";
	import Hero from "./Hero.svelte";
	import Products from "../lib/components/Products.svelte";
	import ShowCase from "../lib/components/ShowCase.svelte";

	export let data: PageData;
	productsStore.set(data.products);	
</script>

<section class="">
	<Hero
		href="/catalog/mens-shirts"
		title="Payments tool for software companies" 
		copyWrite="From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack"
		image="/shirt.png" 
	/>
	<ShowCase 
		title="Man's Shirt"
		copyWrite="Maculinity at hand"
		category="mens-shirts"
	/>

	<Hero
		href="/catalog"
		title="Payments tool for software companies" 
		copyWrite="From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack"
		image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" 
	/>z
	<ShowCase 
		title="Gadgets"
		copyWrite="Make the distance shorter with tech"
		category="smartphones"
	/>
</section>

