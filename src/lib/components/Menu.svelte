<script>
	import { menu, fullScreenMock } from '$lib/appState.svelte';
	import { getContext } from 'svelte';
	import { browser } from '$app/environment';

	import Links from './Links.svelte';

	const data = getContext('data');

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

<div
	class={`fixed z-10 inset-0 min-w-screen min-h-screen ${
		menu.isOpen ? 'pointer-events-auto' : 'pointer-events-none'
	}`}
>
	<div
		role="dialog"
		aria-modal="true"
		aria-label="Navigation"
		aria-hidden={!menu.isOpen}
		class={`absolute lg:flex lg:items-center w-screen bg-gray duration-700 transition-all overflow-scroll ${
			menu.isOpen ? 'left-0' : 'left-[100%]'
		} top-0 w-full h-full p-25 flex flex-col justify-center items-center text-white`}
	>
		<button
			aria-label="Close Navigation"
			class="absolute top-[50px] right-[40px]"
			onclick={() => {
				menu.isOpen = false;
			}}
		>
			<span class="sr-only">Close Navigation</span>
			<div
				aria-hidden="true"
				class="origin-center w-[20px] h-[18px] transition-all group relative hover:rotate-0 group"
			>
				<div
					class="w-[20px] origin-center absolute top-0 left-0 rotate-45 h-[2px] transition duration-1000 bg-white group-hover:rotate-0"
				></div>
				<div
					class="w-[20px] origin-center absolute top-0 left-0 -rotate-45 h-[2px] transition duration-1000 bg-white group-hover:-rotate-[540deg]"
				></div>
			</div>
		</button>

		<div class="mt-20 lg:mt-0 bg-gray md:max-w-3xl p-[25px]">
			<span class="block text-2xl">Navigation:</span>
			<div class="w-full h-px my-6">
				<div class={`${menu.isOpen ? 'motion-safe:animate-fillBarH' : ''} bg-white h-full w-0`}></div>
			</div>
			<ul class="text-3xl md:text-6xl font-serif space-y-6">
				<li class="group">
					<span
						href="/"
						class="text-white block cursor-default transition group-hover:text-white/30">Home</span
					>
					<div class="relative ml-6">
						<div
							class={`${
								menu.isOpen ? 'motion-safe:animate-fillBarV' : ''
							} absolute top-0 left-0 h-0 w-px bg-white`}
						></div>
						<ul
							class="flex flex-col lg:flex-row lg:gap-8 border-white pl-0 lg:pl-6 mt-4 lg:items-center transition-all group-hover:border-l-8 lg:group-hover:border-l-8"
						>
							<li class="flex items-center">
								<a
									href="/"
									class="w-full text-xl md:text-2xl py-4 hover:underline pl-6 lg:pl-0 transition-all border-0 hover:border-l-8 lg:hover:border-l-0 border-white"
									>#Top</a
								>
							</li>
							<li class="text-xl md:text-2xl hidden lg:block" aria-hidden="true">|</li>
							<li class="flex items-center">
								<a
									href="/#about"
									onclick={() => {
										menu.isOpen = false;
									}}
									class="w-full text-xl md:text-2xl py-4 hover:underline pl-6 lg:pl-0 transition-all border-0 hover:border-l-8 lg:hover:border-l-0 border-white"
									>About</a
								>
							</li>
							<li class="text-xl md:text-2xl hidden lg:block" aria-hidden="true">|</li>
							<li class="flex items-center">
								<a
									href="/#experience"
									onclick={() => {
										menu.isOpen = false;
									}}
									class="w-full text-xl md:text-2xl py-4 hover:underline pl-6 lg:pl-0 transition-all border-0 hover:border-l-8 lg:hover:border-l-0 border-white"
									>Experience</a
								>
							</li>
							<li class="text-xl md:text-2xl hidden lg:block" aria-hidden="true">|</li>
							<li class="flex items-center">
								<a
									href="/#work"
									onclick={() => {
										menu.isOpen = false;
									}}
									class="w-full text-xl md:text-2xl py-4 hover:underline pl-6 lg:pl-0 transition-all border-0 hover:border-l-8 lg:hover:border-l-0 border-white"
									>Work</a
								>
							</li>
							<li class="text-xl md:text-2xl hidden lg:block" aria-hidden="true">|</li>
							<li class="flex items-center">
								<a
									href="/#next-opportunity"
									onclick={() => {
										menu.isOpen = false;
									}}
									class="w-full text-xl md:text-2xl py-4 hover:underline pl-6 lg:pl-0 transition-all border-0 hover:border-l-8 lg:hover:border-l-0 border-white"
									>Contact</a
								>
							</li>
						</ul>
					</div>
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
								menu.isOpen
									? 'motion-safe:animate-[fillBarV_0.5s_ease-in-out_1.74s_1_forwards]'
									: ''
							} absolute top-0 left-0 h-0 w-px bg-white`}
						></div>
						<ul class="group-hover:border-l-8 border-white transition-all transi mt-6">
							{#each data.caseStudies as caseStudy}
								<li>
									<a
										data-sveltekit-prefetch
										href={`/case-studies/${caseStudy.slug}`}
										class="pl-6 py-3 text-white text-xl md:text-2xl block transition-all border-0 hover:border-l-8 border-white underline-offset-8 hover:underline"
									>
										{caseStudy.name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</li>
			</ul>
			<div class="w-full h-px my-6">
				<div
					class={`${
						menu.isOpen ? 'motion-safe:animate-[fillBarH_0.5s_ease-in-out_2.25s_1_forwards]' : ''
					} bg-white h-full w-0`}
				></div>
			</div>
			<div class="flex space-x-6 items-center">
				<span class="block text-2xl">Links:</span>
				<Links sizeClass="w-12 h-12" />
			</div>
		</div>
	</div>
</div>
