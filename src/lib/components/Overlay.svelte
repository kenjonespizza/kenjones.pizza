<script>
	import { isLightBoxOpen } from '$lib/stores';
</script>

<div
	class={`fixed inset-0 w-screen h-screen z-10 transition cursor-pointer ${
		$isLightBoxOpen
			? 'backdrop-blur-md bg-white/50 pointer-events-auto'
			: 'backdrop-blur-none bg-white/0 pointer-events-none'
	}`}
/>
