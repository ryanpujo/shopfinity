<script lang="ts">
	import type { Nav } from "$lib";
	import authStore from "$lib/stores/authStore";
	import { AppBar, LightSwitch, Avatar, type PopupSettings, popup } from "@skeletonlabs/skeleton";
	import { nanoid } from "nanoid";
	import DropdownMenu from "./DropdownMenu.svelte";
	import Drawer from "./Drawer.svelte";
	import List from "$lib/components/list/List.svelte";

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
		<List let:ListItem>
			<ListItem let:ListItemTitle let:ListItemSubtitle prependAvatar='https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop'>
				<ListItemTitle>
					Ryan Pujo
				</ListItemTitle>
				<ListItemSubtitle>
					ryanpujo@gmail.com
				</ListItemSubtitle>
			</ListItem>
		</List>
    <!-- <LightSwitch />

    <Avatar src="/nika.png" width="w-9" cursor="cursor-pointer" />
    <DropdownMenu /> -->
  </svelte:fragment>
</AppBar>
<div class="w-full h-fit hidden md:flex justify-between px-4 py-2 text-sm list-nav">
	<slot name="extension"/>
</div>
<style>

</style>