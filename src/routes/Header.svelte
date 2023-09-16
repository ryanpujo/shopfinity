<script lang="ts">
	import type { Nav } from "$lib";
	import authStore from "$lib/stores/authStore";
	import { AppBar, LightSwitch, Avatar, type PopupSettings, popup } from "@skeletonlabs/skeleton";
	import { nanoid } from "nanoid";
	import DropdownMenu from "./DropdownMenu.svelte";
	import { NavBrand, NavHamburger } from "flowbite-svelte";
	import Drawer from "./Drawer.svelte";

  const menus: Nav[] = [
		{
			id: nanoid(),
			name: "Home",
			href: "/"
		},
		{
			id: nanoid(),
			name: "Catalog",
			href: "/catalog"
		},
		{
			id: nanoid(),
			name: "About us",
			href: "/about"
		}
	]

const popupFeatured: PopupSettings = {
	// Represents the type of event that opens/closed the popup
	event: 'click',
	// Matches the data-popup value on your popup element
	target: 'popupFeatured',
	// Defines which side of your trigger the popup will appear
	placement: 'bottom',
};
					
</script>

<AppBar slotLead="" slotDefault="place-self-center">
  <svelte:fragment slot="lead">
		<span class="hidden md:inline-block">RProjects</span>
		<Drawer />
  </svelte:fragment>
  <svelte:fragment>
    <ul class="hidden md:flex">
      {#each menus as menu (menu.id)}
        <li class="mx-2"><a href={menu.href}>{menu.name}</a></li>
      {/each}
    </ul>
		<span class="md:hidden">RProjects</span>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <LightSwitch />

    <Avatar src="/nika.png" width="w-9" cursor="cursor-pointer" />
    <DropdownMenu />
  </svelte:fragment>
</AppBar>
					
<style>

</style>