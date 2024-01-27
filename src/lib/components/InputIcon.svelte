<script lang="ts">
import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	import type { FormEventHandler, MouseEventHandler } from 'svelte/elements';

export let type = 'text';
export let prependIcon = '';
export let appendIcon = '';
export let prependIconSize = '2em';
export let appendIconOnClick: MouseEventHandler<HTMLButtonElement> | null = null;
export let prependIconOnClick: MouseEventHandler<HTMLButtonElement> | null = null;
export let placeholder: string | null = null;
export let value = '';
const dispatch = createEventDispatcher();
const input: FormEventHandler<HTMLInputElement> = (e)  => {
  dispatch('input', {
    value: e.currentTarget.value
  })
};
</script>

<div {...$$restProps} class="relative flex-grow flex h-fit items-center rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600">
  {#if prependIcon}
  <button class="mx-2" disabled={prependIconOnClick == null} on:click|preventDefault={prependIconOnClick}>
    <Icon class='' height={prependIconSize} icon={prependIcon} />
  </button>
  {/if}
  
  <input {type} {value} on:input={input} class="h-10 bg-gray-100 dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600 rounded-tl-lg rounded-bl-lg focus:ring-0 border-transparent focus:border-transparent" {placeholder}>
  
  {#if appendIcon}
  <button class="mx-2" disabled={appendIconOnClick == null} on:click|preventDefault={appendIconOnClick}>
    <Icon height='2em' icon={appendIcon} />
  </button>
  {/if}
</div>