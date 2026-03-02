<script>
	import { menu, fullScreenMock } from '$lib/appState.svelte';
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
	let y = $state(0);

	afterNavigate(() => {
		menu.isOpen = false;
		// window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	$effect(() => {
		if (browser) {
			if (menu.isOpen || fullScreenMock.isOpen) {
				document.body.classList.add('no-scroll');
			} else {
				document.body.classList.remove('no-scroll');
			}
		}
	});
</script>

<svelte:window bind:scrollY={y} />

<header
	class={`${
		y > 100 ? 'bg-white' : 'bg-transparent'
	} w-full transition fixed p-[25px] flex justify-between z-20`}
>
	<h1 class="">
		<a href="/" class="flex gap-4 items-center">
			<div class="">
				<img
					src={convertToSquareimageAutoFormatAndQuality(data.logoImage.src)}
					alt="Ken Jones Headshot"
					class="rounded-full max-h-[50px] max-w-[50px] m-0 p-0"
				/>
			</div>
			<span class="text-2xl lg:text-4xl font-serif font-extrabold">{data.name}</span>
		</a>
	</h1>

	<div class="flex gap-4 md:gap-8 items-center">
		<div class="gap-4 hidden md:flex items-center">
			<Links sizeClass="h-10 w-10" />
		</div>
		<div class="w-px h-full bg-gray/10"></div>
		<button
			aria-label="Open Navigation"
			class=""
			onclick={() => {
				menu.isOpen = true;
			}}
		>
			<span class="sr-only">Open Navigation</span>
			<div
				aria-hidden="true"
				class="flex flex-col justify-center gap-[6px] w-[20px] h-[18px] transition-all hover:gap-[2px]"
			>
				<div class="w-full h-0.5 bg-gray"></div>
				<div class="w-full h-0.5 bg-gray"></div>
				<div class="w-full h-0.5 bg-gray"></div>
			</div>
		</button>
	</div>

	<Menu />
</header>
