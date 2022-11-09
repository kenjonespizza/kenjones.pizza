<script>
	import { tweened } from 'svelte/motion';
	import { elasticInOut } from 'svelte/easing';

	/** @type {string} */
	export let src = '';
	/**
	 * @type {string}
	 */
	export let alt = '';

	/**
	 * @type {boolean}
	 */
	export let offset = false;

	let amountToScroll = 0;

	function scrollImage(node) {
		// console.log('node:', node);
		const image = node.querySelector('img');
		const imageHeight = image.height;
		// console.log('imageHeight:', imageHeight);
		const nodeHeight = node.offsetHeight;
		// console.log('nodeHeight:', nodeHeight);
		amountToScroll = imageHeight - nodeHeight;
		// const scrollHeight = document.body.scrollHeight;
		// const scrollPosition = window.scrollY;
		// const scrollPercent = scrollPosition / (scrollHeight - nodeHeight);
		// const imageOffset = imageHeight * scrollPercent;

		// image.style.transform = `translateY(-${imageOffset}px)`;
		// image.addEventHandler('mouseover', () => {

		// })
	}

	const y = tweened(0, {
		duration: 5000
		// easing: elasticInOut
	});

	function triggerScroll() {
		$y = amountToScroll;
	}
	function unTriggerScroll() {
		$y = 0;
	}

	// $: console.log($y);
</script>

<figure
	class={`border rounded-lg border-gray-50 bg-gray overflow-hidden self-end ${
		offset ? 'min-w-[1024px]' : ''
	}`}
>
	<div class="flex gap-[.3rem] p-2">
		<div class="rounded-full w-[9px] h-[9px] bg-primary" />
		<div class="rounded-full w-[9px] h-[9px] bg-yellow-500" />
		<div class="rounded-full w-[9px] h-[9px] bg-green-500" />
	</div>
	<div class="aspect-[8/4.8] overflow-y-scroll group relative mini-scrollbar" use:scrollImage>
		<img
			src={`/images/case-studies/${src}`}
			{alt}
			class={`w-full transform origin-bottom transition `}
			style="top: -{$y}px;"
		/>
	</div>
</figure>
