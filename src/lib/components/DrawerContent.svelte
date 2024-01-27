<script>
	import { leftNav } from "$lib/navs";
	import List from "./list/List.svelte";
	import ListItem from "./list/ListItem.svelte";


</script>

<List class='p-2'>
  {#each leftNav as {id, title, href, icon} (id)}
    <ListItem {href} icon={icon} {title}>
      
    </ListItem>
  {/each}
</List>