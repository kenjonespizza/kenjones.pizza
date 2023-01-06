<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		// Redirect to the resume
		goto(data.links.resume);
	});
</script>
