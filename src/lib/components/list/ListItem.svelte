<script lang="ts">
	import { Avatar } from "@skeletonlabs/skeleton";
  import ListItemTitle from "./ListItemTitle.svelte";
  import ListItemSubtitle from "./ListItemSubtitle.svelte";

  export let prependAvatar = '';

</script>

<li class="flex justify-center items-center">
  {#if prependAvatar !== ''}
    
  <Avatar rounded='rounded-full' width='w-10' class='mr-4 h-10' src={prependAvatar}/>
  {/if}
  {#if prependAvatar === ''}
  <div class="mr-4">
    <slot name="prependIcon" />
  </div>
  {/if}
  <div>
    <slot {ListItemTitle} {ListItemSubtitle}/>
  </div>
</li>