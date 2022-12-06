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
<<<<<<< HEAD
				<span class="sr-only">Close Navigation</span>
				<div
					class="origin-center w-[20px] h-[18px] transition-all group relative hover:rotate-0 group"
				>
					<div
						class="w-[20px] origin-center absolute top-0 left-0 rotate-45 h-[2px] transition duration-1000 bg-white group-hover:rotate-0"
					/>
					<div
						class="w-[20px] origin-center absolute top-0 left-0 -rotate-45 h-[2px] transition duration-1000 bg-white group-hover:-rotate-[540deg]"
					/>
				</div>
			</button>

			<div class="w-full md:max-w-2xl p-[25px]">
				<span class="block text-2xl">Navigation:</span>
				<div class="w-full h-px my-6">
					<div class={`${$isMenuOpen ? 'animate-fillBarH' : ''} bg-white h-full w-0`} />
				</div>
				<ul class="text-3xl md:text-6xl font-serif space-y-6">
					<li>
						<a
							data-sveltekit-prefetch
							data-sveltekit-noscroll
							href="/"
							class="text-white block underline-offset-8 hover:underline">Home</a
						>
					</li>
					<li class="group">
						<span
							href="/"
							class="text-white block cursor-default transition group-hover:text-white/30"
							>Case Studies</span
						>
						<div class="relative my-6 ml-6">
							<div
								class={`${
									$isMenuOpen ? 'animate-fillBarV' : ''
								} absolute top-0 left-0 h-0 w-px bg-white`}
							/>
							<ul class="group-hover:border-l-8 border-white transition-all transi mt-6">
								{#each data.caseStudies as caseStudy}
									<li>
										<a
											data-sveltekit-prefetch
											href={`/case-studies/${caseStudy.slug}`}
											class="pl-6 py-3 text-white text-xl md:text-3xl block transition-all border-0 hover:border-l-8 border-white underline-offset-8 hover:underline"
										>
											{caseStudy.name}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</li>
				</ul>
=======
				<div class="w-full h-[2px] bg-gray" />
				<div class="w-full h-[2px] bg-gray" />
				<div class="w-full h-[2px] bg-gray" />
>>>>>>> 894bc271da5f80b250d9cbbda3416e9d0de9fae3
			</div>
		</button>
	</div>

	<Menu />
</header>
