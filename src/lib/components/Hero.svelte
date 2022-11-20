<script>
	import Container from './Container.svelte';
	import TypewriterV2 from './TypewriterV2.svelte';

	import { getContext } from 'svelte';
	const data = getContext('data');
</script>

<div class="bg-gray-50 pt-60 pb-80">
	<main>
		<Container>
			<div class="flex flex-col">
				<span class="text-gray/70 text-xl lg:text-2xl">Words that describe {data.name}:</span>
				<TypewriterV2 />
			</div>
		</Container>
	</main>
</div>
