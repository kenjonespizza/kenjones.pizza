<script>
	import Hero from '$lib/components/Hero.svelte';
	import Container from '$lib/components/Container.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import Mock from '$lib/components/Mock.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import LightBox from '$lib/components/LightBox.svelte';

	import { isLightBoxOpen, CurrentLightBoxImageSrc, CurrentLightBoxImageAlt } from '$lib/stores';
	import { imageAutoFormatAndQuality } from '$lib/utils';

	import { getContext } from 'svelte';

	const data = getContext('data');
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	{#if data?.meta?.description}<meta name="description" content={data.meta.description} />{/if}
	<meta name="theme-color" content="#ffffff" />
	<meta name="twitter:card" content="summary" />
	{#if data?.meta?.twitterUsername}<meta
			name="twitter:site"
			content="@{data.meta.twitterUsername}"
		/>{/if}
	<meta property="og:type" content="website" />
	{#if data?.meta?.title}<meta property="og:title" content={data.meta.title} />{/if}
	{#if data?.meta?.description}<meta
			property="og:description"
			content={data.meta.description}
		/>{/if}
	{#if data?.meta?.siteName}<meta property="og:site_name" content={data.meta.siteName} />{/if}
	<meta property="og:url" content={`${data.siteInfo.url.href}`} />
</svelte:head>

<LightBox />

<Hero />

<section class="section space-y-6 lg:space-y-12" id="about">
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

<section class="section" id="experience">
	<Container standard>
		<h2 class="section-heading">Experience.</h2>
		<div
			class="side flex flex-col gap-6 border-l border-gray-50 pl-6 
		lg:pl-6"
		>
			<div class="flex flex-col gap-10">
				{@html data.resume}
				<a
					class="w-auto justify-center rounded-full border border-gray hover:border-gray bg-gray hover:bg-white inline-flex gap-[22px] px-[30px] py-[17px] text-white hover:text-gray font-medium text-xl items-center transition"
					href={data?.links?.resume}
					>View Resume <svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24"
						height="24"
						><path fill="none" d="M0 0h24v24H0z" /><path
							fill="currentColor"
							d="M16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-4 14a4 4 0 1 0 0-8H8v8h4zm-2-6h2a2 2 0 1 1 0 4h-2v-4z"
						/></svg
					></a
				>
			</div>
		</div>
	</Container>
</section>

<section class="section space-y-6 lg:space-y-12" id="work">
	<Container standard>
		<h2 class="section-heading">Featured Works.</h2>
		<div class="side flex flex-col items-start gap-6">
			{#each data.caseStudies as project, i}
				<div>
					<h3 class="font-serif text-2xl font-bold">{project.name}</h3>

					<p class="text-gray/70 text-xl">
						{project.shortDescription}
					</p>
				</div>

				<!-- <Mock src={project.mainImage} /> -->
				{#if project.mainImage.isBrowserPreview}
					<Mock
						src={project.mainImage.src}
						alt={project.mainImage.alt}
						href={`/case-studies/${project.slug}`}
					/>
				{:else}
					<a
						href={`/case-studies/${project.slug}`}
						class="mt-2 ring-gray ring-offset-2 overflow-hidden transition rounded-lg hover:ring hover:ring-offset-2 hover:ring-gray hover:ring-offset-white"
					>
						<img
							src={imageAutoFormatAndQuality(project.mainImage.src)}
							alt={project.mainImage.alt}
						/>
					</a>
				{/if}
				<a
					class="w-auto justify-center rounded-full  border border-gray hover:border-gray bg-gray hover:bg-white inline-flex gap-[22px] px-[30px] py-[17px] text-white hover:text-gray font-medium text-xl items-center transition"
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

				{#if i < data.caseStudies.length - 1}
					<div class="h-[1px] w-full bg-gray-50 mb-3 mt-4" />
				{/if}
			{/each}
		</div>
	</Container>
</section>
{#if data?.designs?.length}
	<section class="section space-y-6 lg:space-y-12" id="work">
		<Container standard>
			<h2 class="section-heading">Design Examples.</h2>
			<div class="side flex flex-col items-start gap-6">
				<div class="grid gap-8">
					{#each data.designs as design, i}
						<div>
							<div class="mb-2 ">
								<h3 class="font-serif text-2xl font-bold">{design.name}</h3>
								<p class="text-gray/70 text-lg">
									{design.description}
								</p>
							</div>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={design.link}
								class={`block relative rounded-2xl overflow-hidden transition hover:ring-4 hover:ring-offset-4 hover:ring-offset-white hover:ring-gray`}
							>
								<div
									class="absolute z-10 inset-0 flex gap-2 justify-center items-center w-full h-full bg-gray/50 transition opacity-0 hover:opacity-100 group"
								>
									<div
										class="flex gap-3 justify-center items-center translate-y-20 rotate-45 transition group-hover:translate-y-0 group-hover:rotate-0"
									>
										<p class="text-white text-xl font-bold">View Preview:</p>
										<div
											class="aspect-square bg-gray p-2 w-12 h-12 flex items-center justfy-center rounded-lg"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 38 57"
												class="h-full w-full"
											>
												<path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
												<path
													fill="#0acf83"
													d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
												/>
												<path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
												<path
													fill="#f24e1e"
													d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
												/>
												<path
													fill="#a259ff"
													d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
												/>
											</svg>
										</div>
									</div>
								</div>

								<img
									src={imageAutoFormatAndQuality(design.image.src)}
									class={`rounded-2xl aspect-[4/3] object-cover transform transition`}
									alt={design.image.alt}
								/>
							</a>
						</div>
					{/each}
				</div>
			</div>
		</Container>
	</section>
{/if}
<Container>
	<CTA />
</Container>
