<script>
	import { getFirebaseAuth } from "$lib/config/firebase_config";
import authStore from "$lib/stores/authStore";
	import { getModalStore } from "@skeletonlabs/skeleton";
	import List from "./list/List.svelte";
	import ListItem from "./list/ListItem.svelte";
	import { modal } from "$lib/modalSettings";
	import Divider from "./Divider.svelte";

  const popupMenus = [
    {
      title: 'Account',
      href: '/account',
      icon: 'mdi:account'
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: 'mdi-cog-outline'
    },
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: 'mdi-view-dashboard'
    },
  ];
  const modalStore = getModalStore();
  const imageUrl = 'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop';
  const auth = getFirebaseAuth();
  const signOut = () => auth.signOut();
  const openModal = () => modalStore.trigger(modal);
</script>

<div class="card p-4 shadow-xl">
  <List>
    {#if $authStore.isLoggedIn}
      <ListItem 
        prependAvatar={imageUrl}
        title={$authStore.user?.displayName}
        subtitle={$authStore.user?.email}
      />
      <Divider />
    {/if}
    {#each popupMenus as menu}
      <ListItem 
        title={menu.title}
        href={menu.href}
        icon={menu.icon}
      />
    {/each}
    {#if $authStore.isLoggedIn}
      <Divider />
      <ListItem 
        icon="mdi-logout"
        title="Sign out"
        on:click={signOut}
      />
    {:else}
      <Divider />
      <ListItem 
        icon="mdi-logout"
        title="Sign in"
        on:click={openModal}
      />
    {/if}
  </List>
</div>