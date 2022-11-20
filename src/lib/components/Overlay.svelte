<script>
	import { isLightBoxOpen, isFullScreenMockOpen } from '$lib/stores';
</script>

<div
	class={`fixed inset-0 w-screen h-screen z-30 transition cursor-pointer ${
		$isLightBoxOpen || $isFullScreenMockOpen
			? 'backdrop-blur-md bg-white/50 pointer-events-auto'
			: 'backdrop-blur-none bg-white/0 pointer-events-none'
	}`}
/>
