<script lang="ts">
	import { Avatar } from "@skeletonlabs/skeleton";
  import ListItemTitle from "./ListItemTitle.svelte";
  import ListItemSubtitle from "./ListItemSubtitle.svelte";
  import Icon from '@iconify/svelte';

  export let prependAvatar: string | null = null;
  export let href = '';
  export let icon: string | null = null;
  export let iconColor = '';
  export let iconSize = '1em';
  export let title: string | null = '';
  export let subtitle: string | null = '';

</script>

<li class="flex justify-start items-center">
  <a {href} class="flex justify-between" on:click>

    {#if prependAvatar != null}
      
    <Avatar rounded='rounded-full' width='w-10' class='h-10' src={prependAvatar}/>
    {/if}
    {#if icon != null}
      <Icon {icon} height={iconSize} color={iconColor} />
    {/if}
    <div>
      <ListItemTitle>{title}</ListItemTitle>
      <ListItemSubtitle>{subtitle}</ListItemSubtitle>
      <slot />
    </div>
  </a>
</li>