<script>
	import GalleryItem from '$lib/components//GalleryItem.svelte';

	/** @type {string} **/
	const name = 'Ken Jones';

	import { getContext } from 'svelte';
	const data = getContext('data');
</script>

<div class="grid grid-cols-2 lg:grid-cols-3 gap-[25px]">
	{#each data.bioImages as image}
		<GalleryItem {image} />
	{/each}
</div>
