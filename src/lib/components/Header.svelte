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
		<div class=" gap-4 hidden md:flex items-center">
			{#if data?.links?.resume}
				<a target="_blank" rel="noreferrer" href={data.links.resume}
					><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
						><path fill="none" d="M0 0h24v24H0z" /><path
							fill="currentColor"
							d="M16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-4 14a4 4 0 1 0 0-8H8v8h4zm-2-6h2a2 2 0 1 1 0 4h-2v-4z"
						/></svg
					></a
				>
			{/if}
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
