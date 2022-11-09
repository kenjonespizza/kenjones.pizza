<script>
	import { isLightBoxOpen, CurrentLightBoxImageSrc, CurrentLightBoxImageAlt } from '$lib/stores';

	import Overlay from './Overlay.svelte';

	/** @param {any} event **/
	function handleKeyDown(event) {
		if (event.key === 'Escape') {
			isLightBoxOpen.set(false);
		}
	}

	// $: console.log($isLightBoxOpen);
</script>

<svelte:window on:keydown={handleKeyDown} />

<Overlay />
{#if $isLightBoxOpen}
	<button
		on:click={() => ($isLightBoxOpen = false)}
		class="fixed inset-0 z-20 h-screen w-screen flex justify-center items-center"
	>
		<button on:click={() => ($isLightBoxOpen = false)}>
			<img
				src={$CurrentLightBoxImageSrc}
				alt={$CurrentLightBoxImageAlt}
				class="max-w-[calc(100vw-25px)] max-h-[calc(100vh-25px)] lg:max-w-[calc(100vw-100px)] lg:max-h-[calc(100vh-100px)]"
			/>
		</button>
	</button>
{/if}
