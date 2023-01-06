<script>
	import { goto } from '$app/navigation';
	/** @type {import('./$types').PageData} */
	export let data;

	goto(data.links.resume);
</script>
