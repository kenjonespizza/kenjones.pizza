<script>
	import { imageAutoFormatAndQuality } from '$lib/utils';
	import { isFullScreenMockOpen, fullScreenMockSrc, fullScreenMockAlt } from '$lib/stores';
	import Overlay from '$lib/components/Overlay.svelte';
	export let src = '';
	export let alt = '';

	function closeFullScreenMock() {
		isFullScreenMockOpen.set(false);
		fullScreenMockSrc.set('');
		fullScreenMockAlt.set('');
	}
</script>

<svelte:window on:keydown={closeFullScreenMock} />

{#if $isFullScreenMockOpen && $fullScreenMockSrc}
	<Overlay />

	<div class="fixed p-6 pt-12 lg:p-14 inset-0 z-30 w-full h-full flex justify-center items-center ">
		<button
			on:click={() => ($isFullScreenMockOpen = false)}
			class="fixed inset-0 z-30 h-screen w-screen flex justify-center items-center"
		/>
		<button on:click={() => ($isFullScreenMockOpen = false)} class="fixed top-4 right-4 z-30 ">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
				><path fill="none" d="M0 0h24v24H0z" /><path
					d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
				/></svg
			></button
		>
		<figure
			class={` z-30 h-full max-w-[1200px] border rounded-lg border-gray-50 bg-gray overflow-hidden self-end overflow-y-scroll`}
		>
			<div class="flex gap-[.3rem] p-2 z-10 sticky top-0 bg-gray">
				<div class="rounded-full w-[9px] h-[9px] bg-primary" />
				<div class="rounded-full w-[9px] h-[9px] bg-yellow-500" />
				<div class="rounded-full w-[9px] h-[9px] bg-green-500" />
			</div>
			<div class="bg-white height-full  group relative mini-scrollbar">
				<img
					src={imageAutoFormatAndQuality($fullScreenMockSrc)}
					alt={$fullScreenMockAlt}
					class={`w-full transform origin-bottom transition `}
				/>
			</div>
		</figure>
	</div>
{/if}
