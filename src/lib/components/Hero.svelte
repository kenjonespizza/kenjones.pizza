<script>
	import Container from './Container.svelte';
	import Typewriter from './Typewriter.svelte';

	import { getContext } from 'svelte';
	const data = getContext('data');
</script>

<div class="bg-gray-50 pt-60 pb-80">
	<main>
		<Container>
			<div class="flex flex-col">
				<span class="text-gray/70 text-xl lg:text-2xl">{data.name} is a:</span>
				<Typewriter />
			</div>
		</Container>
	</main>
</div>
