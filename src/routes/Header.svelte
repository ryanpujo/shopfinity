<script lang="ts">
	import authStore from "$lib/stores/authStore";
	import { AppBar, getDrawerStore, type DrawerSettings } from "@skeletonlabs/skeleton";
	import List from "$lib/components/list/List.svelte";
	import InputIcon from "$lib/components/InputIcon.svelte";
	import ListItem from "$lib/components/list/ListItem.svelte";
	import ListItemTitle from "$lib/components/list/ListItemTitle.svelte";
	import ListItemSubtitle from "$lib/components/list/ListItemSubtitle.svelte";
	// @ts-ignore
	import Icon from '@iconify/svelte';

	const drawerSettings: DrawerSettings = {
	id: 'example-3',
	// Provide your property overrides:
	bgDrawer: 'bg-purple-900 text-white',
	bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
	width: 'w-[200px] md:w-[480px]',
	padding: 'p-4',
	rounded: 'rounded-xl',
};
const title = $authStore.isLoggedIn ? $authStore.user?.displayName : 'Sign in';
const subtitle = $authStore.isLoggedIn ? $authStore.user?.email : 'Account';
const imageUrl = 'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop';
	const drawerStore = getDrawerStore();
	const openDrawer = () => drawerStore.open(drawerSettings);
</script>

<AppBar slotLead="" slotDefault="place-self-center">
  <svelte:fragment slot="lead">
		<span class="hidden lg:inline-block">RProjects</span>
		<button class="lg:hidden" on:click={openDrawer}>
			<Icon icon='mdi:menu' color='#ffffff' />
		</button>
  </svelte:fragment>
  <svelte:fragment>
    <InputIcon>
			<svelte:fragment slot="prependIcon">
				<Icon icon='mdi:magnify' />
			</svelte:fragment>
		</InputIcon>
  </svelte:fragment>
  <svelte:fragment slot="trail">
		<List class='flex'>
			<ListItem 
				icon='mdi:cards-heart' 
				iconSize='2em'
				title='Wishlist'
				subtitle='My Items'
			>
			</ListItem>
			<ListItem 
				icon='mdi:cart-plus' 
				iconSize='2em'
				title='Total'
				subtitle='Price'
			>
			</ListItem>
			<ListItem 
				prependAvatar={$authStore.isLoggedIn ? imageUrl : undefined} 
				icon={$authStore.isLoggedIn ? undefined : 'mdi:account'}
				iconSize='2em'
				title={title}
				subtitle={subtitle}
			>
			</ListItem>
		</List>
    <!-- <LightSwitch /> -->

    <!-- <Avatar src="/nika.png" width="w-9" cursor="cursor-pointer" />
    <DropdownMenu /> -->
  </svelte:fragment>
</AppBar>
<div class="w-full h-fit hidden lg:flex justify-between px-4 py-2 text-sm list-nav">
	<slot name="extension"/>
</div>
<style>

</style>