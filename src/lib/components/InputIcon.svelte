<script lang="ts">
import Icon from '@iconify/svelte';
	import type { MouseEventHandler } from 'svelte/elements';

export let type = 'text';
export let prependIcon = '';
export let appendIcon = '';
export let appendIconOnClick: MouseEventHandler<HTMLButtonElement> | null = null;
export let prependIconOnClick: MouseEventHandler<HTMLButtonElement> | null = null;
</script>

<div class="relative flex-grow flex h-fit items-center rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600">
  {#if prependIcon}
  <button class="mx-2" disabled={prependIconOnClick == null} on:click|preventDefault={prependIconOnClick}>
    <Icon class='' height='2em' icon={prependIcon} />
  </button>
  {/if}
  
  <input {type} class="h-10 bg-gray-100 dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600 rounded-tl-lg rounded-bl-lg focus:ring-0 border-transparent focus:border-transparent" placeholder="Search">
  
  {#if appendIcon}
  <button class="mx-2" disabled={appendIconOnClick == null} on:click|preventDefault={appendIconOnClick}>
    <Icon height='2em' icon={appendIcon} />
  </button>
  {/if}
</div>