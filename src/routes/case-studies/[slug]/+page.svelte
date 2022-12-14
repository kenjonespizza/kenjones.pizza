<script>
	import Container from '$lib/components/Container.svelte';
	import Mock from '$lib/components/Mock.svelte';
	import { page } from '$app/stores';
	import { imageAutoFormatAndQuality } from '$lib/utils';
	import { isLightBoxOpen, CurrentLightBoxImageSrc, CurrentLightBoxImageAlt } from '$lib/stores';
	import LightBox from '$lib/components/LightBox.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	data.siteInfo = {
		url: $page.url,
		route: $page.route
	};
</script>

<svelte:head>
	<title>{data.project.name}</title>
	{#if data?.meta?.description}<meta
			name="description"
			content={data.project.shortDescription}
		/>{/if}
	<meta name="theme-color" content="#ffffff" />
	<meta name="twitter:card" content="summary" />
	{#if data?.meta?.twitterUsername}<meta
			name="twitter:site"
			content="@{data.meta.twitterUsername}"
		/>{/if}
	<meta property="og:type" content="website" />
	{#if data?.meta?.title}<meta property="og:title" content={data.project.name} />{/if}
	{#if data?.meta?.description}<meta
			property="og:description"
			content={data.project.shortDescription}
		/>{/if}
	{#if data?.meta?.siteName}<meta property="og:site_name" content={data.meta.siteName} />{/if}
	<meta property="og:url" content={`${data?.siteInfo?.url?.href}`} />
</svelte:head>

<Container>
	<div class="mt-10 grid grid-cols-1 lg:grid-cols-7 gap-12">
		<div class="lg:col-span-3 space-y-6">
			<div class="prose prose-xl">
				<a href="/#work" class="pb-2 block text-sm transition-all hover:pl-2"
					>&lt; Back to work samples</a
				>
				<h1 class="font-serif text-5xl font-bold">{data.project.name}</h1>
				{@html data.project.longDescription}
			</div>
			{#if data.project?.button?.url}
				<a
					class="w-auto justify-center rounded-full border border-gray hover:border-gray bg-gray hover:bg-white inline-flex gap-[22px] px-[30px] py-[17px] text-white hover:text-gray font-medium text-xl items-center transition"
					target="_blank"
					rel="noreferrer"
					href={data.project.button.url}
				>
					<span>{data.project.button.text || 'View Live Site'}</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
						><path fill="none" d="M0 0h24v24H0z" /><path
							fill="currentColor"
							d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
						/></svg
					>
				</a>
			{/if}
		</div>

		<div class="lg:col-span-4 space-y-6">
			{#each data.project.images as image}
				{#key image.src}
					<div>
						<span>{image.title}</span>
						{#if image.isBrowserPreview}
							<Mock src={image.src} alt={image.alt} title={image.title} />
						{:else}
							<button
								class="mt-2 transition rounded-lg hover:ring hover:ring-offset-2 hover:ring-gray hover:ring-offset-white overflow-hidden"
								on:click={() => {
									$isLightBoxOpen = true;
									$CurrentLightBoxImageSrc = image.src;
									$CurrentLightBoxImageAlt = image.alt;
								}}
							>
								<img
									src={imageAutoFormatAndQuality(image.src)}
									alt={image.alt}
									title={image.title}
								/>
							</button>
						{/if}
					</div>
				{/key}
			{/each}
		</div>
	</div>
</Container>

<div class="border-t border-gray-50 py-20 mt-20">
	<Container>
		<h2 class="font-serif font-bold text-3xl mb-6">View More Work</h2>
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
			{#each data.caseStudies as project, i}
				{#if project.slug !== data.project.slug}
					<div class="flex gap-2 flex-col">
						{#if project.mainImage.isBrowserPreview}
							<Mock
								noScroll
								src={project.mainImage.src}
								alt={project.mainImage.alt}
								showFullScreenButton={false}
								href={`/case-studies/${project.slug}`}
							/>
						{:else}
							<a
								href={`/case-studies/${project.slug}`}
								class="transition rounded-lg hover:ring hover:ring-offset-2 hover:ring-gray hover:ring-offset-white"
							>
								<img
									src={imageAutoFormatAndQuality(project.mainImage.src)}
									alt={project.mainImage.alt}
									class="aspect-[371/248] object-cover object-top"
								/>
							</a>
						{/if}
						<div>
							<h3 class="font-serif text-xl font-bold">{project.name}</h3>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</Container>
</div>
<LightBox />
