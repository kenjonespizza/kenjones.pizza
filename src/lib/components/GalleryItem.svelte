<script>
	import { getContext } from 'svelte';
	import { isLightBoxOpen, CurrentLightBoxImageSrc, CurrentLightBoxImageAlt } from '$lib/stores';
	import { cloudinary } from '$lib/cloudinary';
	import { convertToSquareimageAutoFormatAndQuality } from '$lib/utils';
	const data = getContext('data');

	export let image;

	/** @type {Object.<string,string>} **/
</script>

<button
	on:click={() => {
		$isLightBoxOpen = true;
		$CurrentLightBoxImageSrc = image.src;
		$CurrentLightBoxImageAlt = image.alt;
	}}
	class={`relative rounded-2xl overflow-hidden transition hover:ring-4 hover:ring-offset-4 hover:ring-offset-white hover:ring-gray`}
>
	<div
		class="absolute z-10 inset-0 flex justify-center items-center w-full h-full bg-gray/50 transition opacity-0 hover:opacity-100 group"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width="24"
			height="24"
			class="text-white w-12 h-12 translate-y-20 rotate-45 transition group-hover:translate-y-0 group-hover:rotate-0"
			><path fill="none" d="M0 0h24v24H0z" /><path
				fill="currentColor"
				d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
			/></svg
		>
	</div>
	<!-- <img
		src={image.src}
		alt={image.alt}
		class={`rounded-2xl aspect-square object-cover transform transition`}
	/>
	<picture>
		<img
			sizes="(max-width: 800px) 100vw, 800px"
			srcset={`
		${image.src},w_200.webp 200w,
		${image.src},w_588.webp 588w,
		${image.src},w_800.webp 800w`}
			src="${image.src},w_800.webp"
			class={`rounded-2xl aspect-square object-cover transform transition`}
			alt={image.alt}
		/>
	</picture> -->

	<!-- <picture>
		<img
			sizes="(max-width: 1394px) 100vw, 1394px"
			srcset="
			${image.src},w_200.jpg 200w,
			${image.src},w_565.jpg 565w,
			${image.src},w_829.jpg 829w,
			${image.src},w_1035.jpg 1035w,
			${image.src},w_1200.jpg 1200w,
			${image.src},w_1343.jpg 1343w,
			${image.src},w_1391.jpg 1391w,
			${image.src},w_1394.jpg 1394w"
			src="${image.src},w_1394.jpg"
			class={`rounded-2xl aspect-square object-cover transform transition`}
			alt={image.alt}
		/>
	</picture> -->

	<img
		src={convertToSquareimageAutoFormatAndQuality(image.src)}
		class={`rounded-2xl aspect-square object-cover transform transition`}
		alt={image.alt}
	/>
</button>
