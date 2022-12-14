<script>
	/** @type {string} */
	export let href = '';
</script>

{#if href}
	<a {href} class="block">
		<slot />
	</a>
{:else}
	<slot />
{/if}
