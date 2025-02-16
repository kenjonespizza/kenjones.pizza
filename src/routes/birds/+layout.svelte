<script lang="ts">
	import ThemeProvider from '$lib/components/ThemeProvider.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	let { children } = $props();
</script>

<ThemeProvider theme="berry" mode="dark" class="min-h-screen">
	<a href="/" class="absolute right-0">Home</a>
	<a href="/birds" class="absolute top-20 right-0">Birds</a>
	<a href="/birds/hello" class="absolute top-40 right-0">Bird</a>
	<a href="/posts" class="absolute top-60 right-0">Posts</a>
	<SideBar breadcrumbs={['Birds', 'Bird']} />
	{@render children()}
</ThemeProvider>

<style>
	@reference "../../app.css";

	:global(:root) {
	}
</style>
