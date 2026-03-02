<script>
	import { lightbox, fullScreenMock } from '$lib/appState.svelte';
</script>

<div
	class={`fixed inset-0 w-screen h-screen z-30 transition cursor-pointer ${
		lightbox.isOpen || fullScreenMock.isOpen
			? 'backdrop-blur-md bg-white/50 pointer-events-auto'
			: 'backdrop-blur-none bg-white/0 pointer-events-none'
	}`}
></div>
