<script lang="ts">
	import '../app.postcss';
	import { AppShell } from "@skeletonlabs/skeleton";
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

import { storePopup } from '@skeletonlabs/skeleton';
storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
			
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	
</script>



<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	

	<slot />
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>

