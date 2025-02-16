<script lang="ts">
	import ThemeProvider from '$lib/components/ThemeProvider.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	let { children } = $props();
</script>

<ThemeProvider theme="sauce" mode="light" class="min-h-screen">
	<SideBar />
	<div class="pl-16">
		{@render children()}
	</div>
</ThemeProvider>

<!-- <style>
	@reference "../../app.css";

	:global(:root) {
	}
</style> -->
