<script>
	import { getContext } from 'svelte';
	import Container from '$lib/components/Container.svelte';
	import { imageAutoFormatAndQuality } from '$lib/utils';

	const data = getContext('data');
</script>

<section class="py-10" id="logos">
	<Container>
		<div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
			{#each data.logos as logo}
				<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
					<img
						class={`h-6 lg:h-10 object-contain object-center ${
							logo.desaturate ? 'saturate-0' : ''
						}`}
						src={imageAutoFormatAndQuality(logo.src)}
						alt={logo.name}
					/>
				</div>
			{/each}
		</div>
	</Container>
</section>

<!-- src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" -->
