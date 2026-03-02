<script>
	import { isLightBoxOpen, CurrentLightBoxImageSrc, CurrentLightBoxImageAlt } from '$lib/stores';
	import Overlay from './Overlay.svelte';
	import { imageAutoFormatAndQuality } from '$lib/utils';

	function handleKeyDown(event) {
		if (event.key === 'Escape') {
			isLightBoxOpen.set(false);
		}
	}
</script>

<svelte:window onkeydown={handleKeyDown} />

<Overlay />
{#if $isLightBoxOpen}
	<div
		onclick={() => ($isLightBoxOpen = false)}
		onkeydown={(e) => e.key === 'Enter' && ($isLightBoxOpen = false)}
		role="button"
		tabindex="0"
		aria-label="Close lightbox"
		class="fixed inset-0 z-30 h-screen w-screen flex justify-center items-center"
	>
		<button
			onclick={(e) => { e.stopPropagation(); $isLightBoxOpen = false; }}
			class="fixed top-4 right-4 z-30"
			aria-label="Close"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
				><path fill="none" d="M0 0h24v24H0z" /><path
					d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
				/></svg
			>
		</button>
		<img
			src={imageAutoFormatAndQuality($CurrentLightBoxImageSrc)}
			alt={$CurrentLightBoxImageAlt}
			class="max-w-[calc(100vw-25px)] max-h-[calc(100vh-25px)] lg:max-w-[calc(100vw-100px)] lg:max-h-[calc(100vh-100px)]"
		/>
	</div>
{/if}
