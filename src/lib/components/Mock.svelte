<script>
	import { tweened } from 'svelte/motion';
	import { elasticInOut } from 'svelte/easing';
	import { cloudinary } from '$lib/cloudinary';
	import { imageAutoFormatAndQuality } from '$lib/utils';
	import { isFullScreenMockOpen, fullScreenMockSrc, fullScreenMockAlt } from '$lib/stores';
	import { getContext } from 'svelte';
	import { onMount } from 'svelte';

	let data = getContext('data');

	/** @type {string} */
	export let src = '';

	/** @type {string} */
	export let alt = '';

	/** @type {string} */
	export let title = '';

	/** @type {boolean} */
	export let offset = false;

	/** @type {boolean} */
	let loaded = false;

	function openFullScreenMock() {
		isFullScreenMockOpen.set(true);
		fullScreenMockSrc.set(src);
		fullScreenMockAlt.set(alt);
	}
</script>

<figure
	class={`border rounded-lg border-gray-50 bg-gray overflow-hidden self-end ${
		offset ? '[@media(min-width:1130px)]:min-w-[1024px]' : ''
	}`}
>
	<div class="flex gap-[.3rem] p-2">
		<div class="rounded-full w-[9px] h-[9px] bg-primary" />
		<div class="rounded-full w-[9px] h-[9px] bg-yellow-500" />
		<div class="rounded-full w-[9px] h-[9px] bg-green-500" />
	</div>
	<div class="bg-white aspect-[8/4.8] overflow-y-scroll group relative mini-scrollbar">
		<img
			src={imageAutoFormatAndQuality(src)}
			{alt}
			class={`w-full transform origin-bottom transition `}
		/>
		<button
			class="sticky left-4 bottom-4 rounded-full p-4 bg-gray text-white motion-safe:animate-[bounce_3s_ease-in-out_infinite]"
			on:click={openFullScreenMock}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
				><path fill="none" d="M0 0h24v24H0z" /><path
					fill="currentColor"
					d="M20 3h2v6h-2V5h-4V3h4zM4 3h4v2H4v4H2V3h2zm16 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"
				/></svg
			>
		</button>
	</div>
</figure>
