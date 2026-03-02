<script lang="ts">
	import { imageAutoFormatAndQuality } from '$lib/utils';
	import { fullScreenMock } from '$lib/appState.svelte';
	import Overlay from '$lib/components/Overlay.svelte';
	interface Props {
		src?: string;
		alt?: string;
	}

	let { src = '', alt = '' }: Props = $props();

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			fullScreenMock.isOpen = false;
			fullScreenMock.src = '';
			fullScreenMock.alt = '';
		}
	}
</script>

<svelte:window onkeydown={handleKeyDown} />

{#if fullScreenMock.isOpen && fullScreenMock.src}
	<Overlay />

	<div
		role="dialog"
		aria-modal="true"
		aria-label="Full screen preview"
		class="fixed p-6 pt-12 lg:p-14 inset-0 z-30 w-full h-full flex justify-center items-center "
	>
		<button
			onclick={() => (fullScreenMock.isOpen = false)}
			aria-label="Close"
			class="fixed inset-0 z-30 h-screen w-screen flex justify-center items-center"
		></button>
		<button
			onclick={() => (fullScreenMock.isOpen = false)}
			aria-label="Close"
			class="fixed top-4 right-4 z-30 "
		>
			<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
				><path fill="none" d="M0 0h24v24H0z" /><path
					d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
				/></svg
			></button
		>
		<figure
			class={` z-30 h-full max-w-[1200px] border rounded-lg border-gray-50 bg-gray overflow-hidden self-end overflow-y-scroll`}
		>
			<div class="flex gap-[.3rem] p-2 z-10 sticky top-0 bg-gray">
				<div class="rounded-full w-[9px] h-[9px] bg-primary"></div>
				<div class="rounded-full w-[9px] h-[9px] bg-yellow-500"></div>
				<div class="rounded-full w-[9px] h-[9px] bg-green-500"></div>
			</div>
			<div class="bg-white height-full  group relative mini-scrollbar">
				<img
					src={imageAutoFormatAndQuality(fullScreenMock.src)}
					alt={fullScreenMock.alt}
					class={`w-full transform origin-bottom transition `}
				/>
			</div>
		</figure>
	</div>
{/if}
