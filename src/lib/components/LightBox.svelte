<script>
	import { isLightBoxOpen, CurrentLightBoxImageSrc, CurrentLightBoxImageAlt } from '$lib/stores';
	import { getContext } from 'svelte';
	import { imageAutoFormatAndQuality } from '$lib/utils';

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
		// if ($CurrentLightBoxImageSrc) {
		// 	img = imageAutoFormatAndQuality($CurrentLightBoxImageSrc);
		// 	src = img.toURL();
		// }
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
				src={imageAutoFormatAndQuality($CurrentLightBoxImageSrc)}
				alt={$CurrentLightBoxImageAlt}
				class="max-w-[calc(100vw-25px)] max-h-[calc(100vh-25px)] lg:max-w-[calc(100vw-100px)] lg:max-h-[calc(100vh-100px)]"
			/>
		</button>
	</button>
{/if}
