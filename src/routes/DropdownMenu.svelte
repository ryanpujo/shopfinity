<script lang="ts">
	import type { Nav } from "$lib";
	import authStore from "$lib/stores/authStore";
	import { nanoid } from "nanoid";
  import {Dropdown, DropdownHeader, DropdownItem} from 'flowbite-svelte';
	import AuthModal from "./AuthModal.svelte";
	import { getFirebaseAuth } from "$lib/config/firebase_config";
	let formModal = false;
	const auth = getFirebaseAuth();
  const menus: Nav[] = [
		{
			id: nanoid(),
			name: "Profile",
			href: "/profile"
		},
		{
			id: nanoid(),
			name: "Account",
			href: "/account"
		},
		{
			id: nanoid(),
			name: "Settings",
			href: "/settings"
		}
	]
	function openSignInModal() {
		formModal = !formModal;
	}
	function handleSignOut() {
		auth.signOut();
	}
</script>


<Dropdown placement="top-end">
	{#if $authStore.isLoggedIn}
		
  <DropdownHeader class="px-4 py-2">
    <span class="block text-sm text-gray-900 dark:text-white">{$authStore.user?.displayName}</span>
    <span class="block truncate text-sm font-medium">{$authStore.user?.email}</span>
  </DropdownHeader>
	{/if}
  {#each menus as menu (menu.id)}
    <DropdownItem href={menu.href}>{menu.name}</DropdownItem>
  {/each}
  <DropdownItem on:click={$authStore.isLoggedIn ? handleSignOut : openSignInModal} slot="footer">
		<p class="anchor">
			{$authStore.isLoggedIn ? "Sign out" : "Sign in"}
		</p>
	</DropdownItem>
</Dropdown>
<AuthModal bind:formModal />