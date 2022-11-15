<script>
	import { onMount, tick } from 'svelte';
	import { data } from '$lib/data';
	import { browser } from '$app/environment';

	let wrapper;
	let loaded = false;
	onMount(() => {
		if (browser) {
			loaded = true;
			rotateText(5000);
		}
	});

	function rotateText(interval) {
		let maxCount = data.titles.length - 1;
		let currCount = 0;

		setInterval(() => {
			const currEl = document.querySelector(`.line-${currCount}`);
			const nextIndex = currCount === maxCount ? 0 : currCount + 1;
			const nextEl = document.querySelector(`.line-${nextIndex}`);

			currEl.classList.add('opacity-0');
			currEl.classList.remove('opacity-100');
			nextEl.classList.add('opacity-100');
			nextEl.classList.remove('opacity-0');
			currCount = nextIndex;
		}, interval);
	}
</script>

<div class="relative" bind:this={wrapper}>
	{#if loaded}
		{#each data.titles as title, i}
			<span
				class={`tagline line-${i} transition duration-1000 absolute top-0 left-0 ${
					i === 0 ? 'opcaity-100' : 'opacity-0'
				} text-gray text-7xl sm:text-[120px] md:text-[150px] font-serif font-bold tracking-[-.06em] lg:text-[180px]`}
				>{title}</span
			>
		{/each}
	{/if}
</div>
