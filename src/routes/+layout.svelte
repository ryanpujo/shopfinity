<script lang="ts">
	import '../app.postcss';
	import { AppShell, Drawer, initializeStores, Modal, type ModalComponent } from "@skeletonlabs/skeleton";
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
import { storePopup } from '@skeletonlabs/skeleton';
storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
			
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { nanoid } from 'nanoid';
		import type { PageData } from './$types';
	import productsStore from '$lib/stores/productsStore';
	import { leftNav, rightNav } from '$lib/navs';
	import List from '$lib/components/list/List.svelte';
	import ListItem from '$lib/components/list/ListItem.svelte';
	import ListItemTitle from '$lib/components/list/ListItemTitle.svelte';
	import ModalForm from '$lib/components/ModalForm.svelte';
	import DrawerContent from '$lib/components/DrawerContent.svelte';
	export let data: PageData;
	productsStore.set(data.products);	
	initializeStores();

storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
			
	
	
</script>


<Modal />
<Drawer>
	<DrawerContent />
</Drawer>
<AppShell>
	<svelte:fragment slot="header">
		<Header>
			<svelte:fragment slot="extension">
				<List class="flex">
					<ListItem icon='mdi:menu'>
						<ListItemTitle>
							Browse Categories
						</ListItemTitle>
					</ListItem>
					{#each leftNav as {id, title, href} (id)}
						<ListItem {href}>
							<ListItemTitle>
								{title}
							</ListItemTitle>
						</ListItem>
					{/each}
				</List>
				<List class="flex">
					{#each rightNav as {id, title, href} (id)}
					<ListItem {href}>
						<ListItemTitle>
							{title}
						</ListItemTitle>
					</ListItem>
					{/each}
				</List>
			</svelte:fragment>
		</Header>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		
	</svelte:fragment>

	<slot />
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>

