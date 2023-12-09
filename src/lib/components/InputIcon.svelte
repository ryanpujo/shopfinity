<script lang="ts">


export let type = 'text';
</script>

<div class="relative flex-grow flex h-fit items-center rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600">
  <input {type} class="h-10 bg-gray-100 dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600 rounded-tl-lg rounded-bl-lg focus:ring-0" placeholder="Search">
  <button class="btn btn-lg variant-filled-primary rounded-none rounded-tr-lg rounded-br-lg">
    <slot name="prependIcon" />
  </button>
</div>