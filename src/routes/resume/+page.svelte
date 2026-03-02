<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	/**
	 * @typedef {Object} Props
	 * @property {import('./$types').PageData} data
	 */

	/** @type {Props} */
	let { data } = $props();

	onMount(() => {
		// Redirect to the resume
		goto(data.links.resume);
	});
</script>
