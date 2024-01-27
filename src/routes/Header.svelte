<script lang="ts">
	import authStore from "$lib/stores/authStore";
	import { AppBar, getDrawerStore, type DrawerSettings, LightSwitch, Avatar, Modal, getModalStore, type ModalSettings, type ModalComponent, type PopupSettings, popup } from "@skeletonlabs/skeleton";
	import List from "$lib/components/list/List.svelte";
	import InputIcon from "$lib/components/InputIcon.svelte";
	import ListItem from "$lib/components/list/ListItem.svelte";
	import Icon from '@iconify/svelte';
	import DropdownMenu from "./DropdownMenu.svelte";
	import ModalForm from "$lib/components/ModalForm.svelte";
	import { getFirebaseAuth } from "$lib/config/firebase_config";
	import FormStore from "$lib/stores/FormStore";
	import PopupMenu from "$lib/components/PopupMenu.svelte";
	import { modal } from "$lib/modalSettings";

	const drawerSettings: DrawerSettings = {
	id: 'example-3',
	// Provide your property overrides:
	width: 'w-[200px] md:w-[480px]',
	padding: 'p-4',
	rounded: 'rounded-xl',
};

const imageUrl = 'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop';
const drawerStore = getDrawerStore();
const modalStore = getModalStore();
const openDrawer = () => drawerStore.open(drawerSettings);


const popupFeatured: PopupSettings = {
	// Represents the type of event that opens/closed the popup
	event: 'click',
	// Matches the data-popup value on your popup element
	target: 'popupFeatured',
	// Defines which side of your trigger the popup will appear
	placement: 'bottom',
};
					

const openModal = () => modalStore.trigger(modal);
</script>

<div data-popup="popupFeatured">
	<PopupMenu />
	<div class="arrow bg-surface-100-800-token" />
</div>
					
<AppBar slotLead="" slotDefault="place-self-center">
  <svelte:fragment slot="lead">
		<span class="hidden lg:inline-block">RProjects</span>
		<button class="lg:hidden" on:click={openDrawer}>
			<Icon icon='mdi:menu' color='#ffffff' />
		</button>
  </svelte:fragment>
    <InputIcon appendIcon='mdi:magnify' placeholder='Search' />
		
  <svelte:fragment slot="trail">
		<List class='hidden lg:flex'>
			<ListItem 
				icon='mdi:cards-heart' 
				iconSize='2em'
				title='Wishlist'
				subtitle='My Items'
			/>
			<ListItem 
				icon='mdi:cart-plus' 
				iconSize='2em'
				title='Total'
				subtitle='Price'
			/>
			<div use:popup={popupFeatured}>
				<ListItem 
					on:click={$authStore.isLoggedIn ? null : openModal}
					prependAvatar={$authStore.isLoggedIn ? imageUrl : undefined} 
					icon={$authStore.isLoggedIn ? undefined : 'mdi:account'}
					iconSize='2em'
					title={$authStore.isLoggedIn && $authStore.user?.displayName ? $authStore.user?.displayName : 'Sign in'}
					subtitle={$authStore.isLoggedIn ? $authStore.user?.email : 'Account'}
				/>
			</div>
		</List>
    <!-- <LightSwitch /> -->
		<button use:popup={popupFeatured}>
			<Avatar src="/nika.png" width="w-9" cursor="cursor-pointer" class='lg:hidden' />
		</button>
  </svelte:fragment>

</AppBar>
<div class="w-full h-fit hidden lg:flex justify-between px-4 py-2 text-sm list-nav">
	<slot name="extension"/>
</div>