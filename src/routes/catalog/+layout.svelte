<script lang="ts">
	import { AppBar, AppShell } from "@skeletonlabs/skeleton";
	import type { PageData } from "./$types";
	import Sidebar from "./Sidebar.svelte";

  export let data: PageData;
</script>

<AppShell slotSidebarLeft="w-72 mx-6 mt-4" slotPageHeader="mt-4 mr-4">
  <svelte:fragment slot="pageHeader">
   <AppBar slotDefault="place-self-center">
    <ul class="flex flex-wrap">
      {#each data.categories as category}
        <li class="btn btn-sm variant-filled-secondary mx-2 my-2"><a class="" href={`/catalog/${category}`}>{category}</a></li>
      {/each}
    </ul>
   </AppBar>
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <Sidebar />
  </svelte:fragment>
  <slot/>
</AppShell>