<script>
	import Container from '$lib/components/Container.svelte';
	import Mock from '$lib/components/Mock.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	console.log('data:', data);
</script>

<Container>
	<div class="mt-10 grid grid-cols-1 lg:grid-cols-7 gap-12">
		<div class="col-span-3">
			<div class="prose prose-xl">
				<h1 class="font-serif text-5xl font-bold">{data.project.name}</h1>
				{@html data.project.description}
			</div>
		</div>
		<div class="col-span-4 space-y-6">
			<Mock src={data.project.mainImage} alt={data.project.name} />
			<Mock src={data.project.mainImage} alt={data.project.name} />
			<Mock src={data.project.mainImage} alt={data.project.name} />
			<Mock src={data.project.mainImage} alt={data.project.name} />
		</div>
	</div></Container
>
