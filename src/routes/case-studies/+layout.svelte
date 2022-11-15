<script>
	import '$lib/css/app.postcss';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<!-- <link href="https://use.typekit.net/zwk1lgz.css" rel="stylesheet" /> -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Bitter:wght@200;300;400;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="pt-40 pb-12">
	<slot />
</main>
