<script>
	import { onMount, tick } from 'svelte';
	import { data } from '$lib/data';
	import { browser } from '$app/environment';
	import { scrollToElementById } from '$lib/utils';

	let text = data.titles[0];
	let i = 1;
	const animationIn = [{ opacity: 0 }, { opacity: 1 }];

	const animationInTiming = {
		duration: 1000,
		iterations: 1
	};

	onMount(() => {
		if (browser) {
			setInterval(() => {
				text = data.titles[i];
				i = i === data.titles.length - 1 ? 0 : i + 1;
			}, 4000);
		}
	});

	function swipittySwap(node, text) {
		const el = document.createElement('span');
		el.classList.add('tagline', 'animate-bounce');
		el.innerText = text;
		node.animate(animationIn, animationInTiming);
		node.appendChild(el);

		return {
			update(text) {
				// the value of `bar` has changed
				const oldEl = node.querySelector('.tagline');
				node.removeChild(oldEl);
				const newEl = document.createElement('span');
				newEl.classList.add('tagline', 'animate-bounce');
				newEl.innerText = text;
				node.animate(animationIn, animationInTiming);
				node.appendChild(newEl);
			},

			destroy() {
				// the node has been removed from the DOM
			}
		};
	}
</script>

<div class="relative">
	<div
		use:swipittySwap={text}
		class={`relative transition mt-4 duration-1000 absolute top-0 left-0  text-gray text-7xl sm:text-[80px] md:text-[110px] lg:text-[140px] xl:text-[160px]  2xl:text-[180px] font-serif font-bold tracking-[-.06em]`}
	/>

	<button
		on:click={() => {
			scrollToElementById('work');
		}}
		class="absolute bottom-[-100px] w-auto justify-center rounded-full border border-gray hover:border-gray bg-gray hover:bg-white inline-flex gap-[22px] px-[30px] py-[17px] text-white hover:text-gray font-medium text-xl items-center transition"
		>See Work</button
	>
</div>
