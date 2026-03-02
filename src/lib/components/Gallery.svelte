<script>
	import GalleryItem from '$lib/components//GalleryItem.svelte';

	import { getContext } from 'svelte';
	const data = getContext('data');
</script>

<div class="grid grid-cols-2 lg:grid-cols-3 gap-[25px]">
	{#each data.bioImages as image, i}
		<GalleryItem {image} index={i} images={data.bioImages} />
	{/each}
</div>
