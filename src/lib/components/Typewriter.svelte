<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { data } from '$lib/data';
	import { browser } from '$app/environment';
	import { scrollToElementById } from '$lib/utils';

	let text = $state(data.titles[0]);
	let i = 1;

	const { emoji, label } = $derived(parseTitle(text));

	onMount(() => {
		if (browser) {
			setInterval(() => {
				text = data.titles[i];
				i = i === data.titles.length - 1 ? 0 : i + 1;
			}, 4000);
		}
	});

	function parseTitle(str) {
		const match = str.match(
			/^(\p{Emoji_Presentation}[\p{Emoji}\uFE0F\u200D\u{1F3FB}-\u{1F3FF}]*\s*)/u
		);
		return match
			? { emoji: match[1].trimEnd(), label: str.slice(match[1].length) }
			: { emoji: '', label: str };
	}
</script>

<div class="relative">
	<div
		class="relative mt-4 top-0 left-0 text-gray text-5xl sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[130px] 2xl:text-[180px] font-serif font-bold tracking-[-.06em]"
	>
		{#key text}
			<span in:fade={{ duration: 1000 }} class="animate inline-block">
				{#if emoji}
					<span
						class="text-5xl sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[100px] 2xl:text-[180px]"
					>
						{emoji}&nbsp;
					</span>
				{/if}
				{label}
			</span>
		{/key}
	</div>

	<button
		onclick={() => scrollToElementById('work')}
		class="absolute -bottom-25 w-auto justify-center rounded-full border border-gray hover:border-gray bg-gray hover:bg-white inline-flex gap-5.5 px-7.5 py-4.25 text-white hover:text-gray font-medium text-xl items-center transition"
		>See Work</button
	>
</div>
