<script lang="ts">
	import '../app.postcss';
	import { AppShell } from "@skeletonlabs/skeleton";
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

import { storePopup } from '@skeletonlabs/skeleton';
storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
			
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { nanoid } from 'nanoid';
	import { NavHamburger } from 'flowbite-svelte';
	import { TextCenterSolid } from 'flowbite-svelte-icons';

	const leftNav = [
		{
			id: nanoid(4),
			title: 'Home',
			href: '/',
		},
		{
			id: nanoid(4),
			title: 'Catalog',
			href: '/catalog',
		},
		{
			id: nanoid(4),
			title: 'Customer Service',
			href: '/cs',
		},
		{
			id: nanoid(4),
			title: 'Policy',
			href: '/policy',
		},
		{
			id: nanoid(4),
			title: 'Blog',
			href: '/blog',
		},
	];
	const rightNav = [
		{
			id: nanoid(4),
			title: 'Deal of The Day',
			href: '/dotd',
		},
		{
			id: nanoid(4),
			title: 'Hot Deals',
			href: '/hotdeals',
		},
		{
			id: nanoid(4),
			title: 'Best Sellers',
			href: '/bestsellers',
		},
		{
			id: nanoid(4),
			title: 'New Arrivals',
			href: '/newarrivals',
		},
	];
	
</script>



<AppShell>
	<svelte:fragment slot="header">
		<Header>
			<svelte:fragment slot="extension">
				<ul class="list flex">
					<li class="">
						<span class="mr-2">
							<TextCenterSolid size='sm'/>
						</span>
						Browse Categories
					</li>
					{#each leftNav as {id, title, href} (id)}
						<li class=""><a href={href}>{title}</a></li>
					{/each}
				</ul>
				<ul class="flex list">
					{#each rightNav as {id, title, href} (id)}
						<li class=""><a href={href}>{title}</a></li>
					{/each}
				</ul>
			</svelte:fragment>
		</Header>
	</svelte:fragment>
	

	<slot />
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>

