<script>
	import { isMenuOpen, isFullScreenMockOpen } from '$lib/stores';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { getContext } from 'svelte';
	import { browser } from '$app/environment';
	import { cloudinary } from '$lib/cloudinary';
	import { convertToSquareimageAutoFormatAndQuality } from '$lib/utils';
	import Menu from './Menu.svelte';
	import Links from './Links.svelte';

	const data = getContext('data');

	/**
	 * @type {number}
	 */
	let y = 0;

	afterNavigate(() => {
		$isMenuOpen = false;
		// window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	$: {
		if (browser) {
			if ($isMenuOpen || $isFullScreenMockOpen) {
				document.body.classList.add('no-scroll');
			} else {
				document.body.classList.remove('no-scroll');
			}
		}
	}
</script>

<svelte:window bind:scrollY={y} />

<header
	class={`${
		y > 100 ? 'bg-white' : 'bg-transparent'
	} w-full transition fixed p-[25px] flex justify-between z-20`}
>
	<h1 class="">
		<a href="/" class="flex gap-4 items-center">
			<div class="rounded-full border border-gray-100">
				<img
					src={convertToSquareimageAutoFormatAndQuality(data.logoImage.src)}
					alt="Ken Jones Headshot"
					class="rounded-full h-[50px] w-[50px] m-0 p-0 overflow-hidden border-4 border-white block"
				/>
			</div>
			<span class="text-4xl font-serif font-extrabold">{data.name}</span>
		</a>
	</h1>

	<div class="flex gap-8 items-center">
		<div class=" gap-4 hidden md:flex">
			<Links sizeClass="h-10" />
		</div>
		<div class="w-px h-full bg-gray/10" />
		<button
			label="Open Menu"
			class=""
			on:click={() => {
				$isMenuOpen = true;
			}}
		>
			<span class="sr-only">Open Navigation</span>
			<div
				class="flex flex-col justify-center gap-[6px] w-[20px] h-[18px] transition-all hover:gap-[2px]"
			>
				<div class="w-full h-[2px] bg-gray" />
				<div class="w-full h-[2px] bg-gray" />
				<div class="w-full h-[2px] bg-gray" />
			</div>
		</button>
	</div>

	<Menu />
</header>
