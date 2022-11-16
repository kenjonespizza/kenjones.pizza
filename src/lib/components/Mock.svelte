<script>
	import { tweened } from 'svelte/motion';
	import { elasticInOut } from 'svelte/easing';
	import { cloudinary } from '$lib/cloudinary';
	import { imageAutoFormatAndQuality } from '$lib/utils';
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
	</div>
</figure>
