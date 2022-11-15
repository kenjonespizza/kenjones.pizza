<script>
	import Hero from '$lib/components/Hero.svelte';
	import Container from '$lib/components/Container.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Mock from '$lib/components/Mock.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import LightBox from '$lib/components/LightBox.svelte';

	import { getContext } from 'svelte';

	const data = getContext('data');
</script>

<LightBox />

<Hero />

<section class="section space-y-12" id="about">
	<Container standard>
		<h2 class="section-heading">About Me.</h2>
		<div class="side flex flex-col gap-6">
			{@html data.bio}
			<Gallery />
		</div>
	</Container>

	<Container>
		<CTA />
	</Container>
</section>

<section class="section" id="resume">
	<Container standard>
		<h2 class="section-heading">Experience.</h2>
		<div
			class="side flex flex-col gap-6 border-l border-gray-50 pl-6 
		lg:pl-6"
		>
			<div class="flex flex-col gap-10">
				{@html data.resume}
			</div>
		</div>
	</Container>
</section>

<section class="section space-y-12">
	<Container standard>
		<h2 class="section-heading">Featured Works.</h2>
		<div class="side flex flex-col items-start gap-6">
			{#each data.caseStudies as project}
				<div>
					<h3 class="font-serif text-2xl font-bold">{project.name}</h3>

					<p class="text-gray/70 text-xl">
						{project.shortDescription}
					</p>
				</div>

				<Mock src={project.mainImage} />
				<a
					class="w-auto justify-center border border-gray hover:border-gray bg-gray hover:bg-white inline-flex gap-[22px] px-[30px] py-[17px] text-white hover:text-gray font-medium text-xl items-center transition"
					href={`/case-studies/${project.slug}`}
				>
					<span>View Case Study</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
						><path fill="none" d="M0 0h24v24H0z" /><path
							fill="currentColor"
							d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
						/></svg
					>
				</a>

				<div class="h-[1px] w-full bg-gray-50 mb-3 mt-4" />
			{/each}
		</div>
	</Container>
	<Container>
		<CTA />
	</Container>
</section>
