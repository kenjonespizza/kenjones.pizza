<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';

	const blocks: number = 24;

	function getRandomNumbers(count: number, max: number): number[] {
		const numbers = new Set<number>();
		while (numbers.size < count) {
			numbers.add(Math.floor(Math.random() * max));
		}
		return Array.from(numbers).sort((a, b) => a - b);
	}

	const randomNumbers = getRandomNumbers(4, blocks - 1);
</script>

<section class="bg-dark text-light h-screen">
	<div
		class={`relative grid h-full`}
		style={`grid-template-columns: repeat(${blocks}, minmax(0, 1fr));`}
	>
		{#each Array(blocks) as _, i}
			{#if randomNumbers.includes(i)}
				<a
					href={`/${i === randomNumbers[0] ? 'posts' : i === randomNumbers[1] ? 'playlists' : i === randomNumbers[2] ? 'birds' : i === randomNumbers[3] ? 'videos' : ''}`}
					class={`${(i === randomNumbers[0] && 'bg-sauce text-light') || (i === randomNumbers[1] && 'bg-cheese text-dark') || (i === randomNumbers[2] && 'bg-berry text-dark ') || (i === randomNumbers[3] && 'bg-gum text-dark')} item nav-item hover:bg-light border-r-dark hover:text-dark group justify-between border-r px-[25vh] text-xl font-semibold transition-all duration-300 hover:px-[10vh]`}
				>
					{#if i === randomNumbers[0]}
						<span>Posts</span>
						<span>Posts</span>
					{:else if i === randomNumbers[1]}
						<span>Playlists</span>
						<span>Playlists</span>
					{:else if i === randomNumbers[2]}
						<span>Birds</span>
						<span>Birds</span>
					{:else if i === randomNumbers[3]}
						<span>Videos</span>
						<span>Videos</span>
					{/if}
				</a>
			{:else}
				<div
					class={`${i + 1 < blocks ? 'border-r' : ''} item text-light/10 hover:bg-light/1 justify-center border-white/3 text-center font-mono transition-all duration-100`}
				>
					<!-- {i + 1} -->
				</div>
			{/if}
		{/each}
		<div
			class="pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center"
		>
			<Logo />
		</div>
	</div>
</section>

<style>
	@reference "../app.css";

	.item {
		@apply flex flex-row items-center text-center;

		&.nav-item {
			writing-mode: vertical-rl;
			text-orientation: mixed;
		}
	}
</style>
