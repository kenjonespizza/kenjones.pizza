<script>
	import '$lib/css/app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { returnFavicon } from '$lib/utils.js';

	/** @type {import('./$types').PageData} */
	export let data;

	import { setContext } from 'svelte';
	setContext('data', data);
</script>

<svelte:head>
	<!-- <link href="https://use.typekit.net/zwk1lgz.css" rel="stylesheet" /> -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Bitter:wght@200;300;400;600;700;800&display=swap"
		rel="stylesheet"
	/>
	<link rel="shortcut icon" href={returnFavicon(data.favicon)} type="image/x-icon" />
</svelte:head>

<div class="page-wrapper">
	<Header />
	<slot />
	<Footer />
</div>
