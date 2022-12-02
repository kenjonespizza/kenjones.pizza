<script>
	import { onMount, tick } from 'svelte';
	import { data } from '$lib/data';
	import { browser } from '$app/environment';

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
		class={`transition mt-4 duration-1000 absolute top-0 left-0  text-gray text-7xl sm:text-[120px] md:text-[150px] font-serif font-bold tracking-[-.06em] lg:text-[180px]`}
	/>
</div>
