<script>
	import { lightbox } from '$lib/appState.svelte';
	import Overlay from './Overlay.svelte';
	import { imageAutoFormatAndQuality } from '$lib/utils';

	const current = $derived(lightbox.images[lightbox.index]);

	function handleKeyDown(event) {
		if (!lightbox.isOpen) return;
		if (event.key === 'Escape') {
			lightbox.isOpen = false;
		} else if (event.key === 'ArrowLeft') {
			if (lightbox.index > 0) lightbox.index--;
		} else if (event.key === 'ArrowRight') {
			if (lightbox.index < lightbox.images.length - 1) lightbox.index++;
		}
	}
</script>

<svelte:window onkeydown={handleKeyDown} />

<Overlay />
{#if lightbox.isOpen && current}
	<div
		onclick={() => (lightbox.isOpen = false)}
		onkeydown={(e) => e.key === 'Enter' && (lightbox.isOpen = false)}
		role="button"
		tabindex="0"
		aria-label="Close lightbox"
		class="fixed inset-0 z-30 h-screen w-screen flex justify-center items-center"
	>
		<button
			onclick={(e) => { e.stopPropagation(); lightbox.isOpen = false; }}
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
			src={imageAutoFormatAndQuality(current.src)}
			alt={current.alt}
			class="max-w-[calc(100vw-25px)] max-h-[calc(100vh-25px)] lg:max-w-[calc(100vw-100px)] lg:max-h-[calc(100vh-100px)]"
		/>
	</div>
{/if}
