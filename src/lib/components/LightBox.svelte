<script>
	import { isLightBoxOpen, CurrentLightBoxImageSrc, CurrentLightBoxImageAlt } from '$lib/stores';
	import { cloudinary } from '$lib/cloudinary';
	import { getContext } from 'svelte';
	import { imageAutoFormatAndQuality } from '$lib/utils';

	let data = getContext('data');

	let img;
	let src;

	import Overlay from './Overlay.svelte';

	/** @param {any} event **/
	function handleKeyDown(event) {
		if (event.key === 'Escape') {
			isLightBoxOpen.set(false);
		}
	}

	$: {
		if ($CurrentLightBoxImageSrc) {
			img = cloudinary.image(
				`${
					data.cloudinaryConfig.folder
						? `${data.cloudinaryConfig.folder}/${$CurrentLightBoxImageSrc}`
						: $CurrentLightBoxImageSrc
				}`
			);
			img = imageAutoFormatAndQuality(img);
			src = img.toURL();
		}
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

<Overlay />
{#if $isLightBoxOpen}
	<button
		on:click={() => ($isLightBoxOpen = false)}
		class="fixed inset-0 z-30 h-screen w-screen flex justify-center items-center"
	>
		<button on:click={() => ($isLightBoxOpen = false)}>
			<img
				{src}
				alt={$CurrentLightBoxImageAlt}
				class="max-w-[calc(100vw-25px)] max-h-[calc(100vh-25px)] lg:max-w-[calc(100vw-100px)] lg:max-h-[calc(100vh-100px)]"
			/>
		</button>
	</button>
{/if}
