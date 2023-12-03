<script lang="ts">
	import { roundToNearestHalf, type Product } from "$lib";
	import productsStore from "$lib/stores/productsStore";
	import { Ratings } from "@skeletonlabs/skeleton";
	import { CartPlusAltOutline, StarHalfSolid, StarOutline, StarSolid } from "flowbite-svelte-icons";
  export let product: Product;
  let clazz: string = "";
  export {clazz as class};
  let value = roundToNearestHalf(product.rating);
</script>

<div class={"card w-72 max-w-xs rounded-xl " + clazz}>
  <img class="object-cover h-60 w-full rounded-t-xl" src={product.images[0]} alt="">
  <h1 class="card-header">{product.title}</h1>
  <div class="flex my-4 items-center">
    <Ratings class="!w-auto mr-2 m" justify="justify-start ml-3" spacing="space-x-1" {value} max={5}>
      <svelte:fragment slot="empty"><StarOutline class="text-yellow-300" /></svelte:fragment>
      <svelte:fragment slot="half"><StarHalfSolid class="text-yellow-300" /></svelte:fragment>
      <svelte:fragment slot="full"><StarSolid class="text-yellow-300" /></svelte:fragment>
    </Ratings>
    <span class="text-sm">{product.rating}</span>
  </div>
  <div class="card-footer flex items-center justify-between">
    <p class="text-3xl mr-4">${product.price}</p>
    <button class="btn variant-filled-primary">
      <span class="mr-2"><CartPlusAltOutline/></span>
      ADD TO CART
    </button>
  </div>
</div>