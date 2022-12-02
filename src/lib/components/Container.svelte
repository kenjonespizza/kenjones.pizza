<script>
	/**
	 * @type {boolean}
	 */
	export let standard = false;
	/**
	 * @type {string | undefined}
	 */
	export let klass = '';
</script>

<div
	class={`mx-auto max-w-[1532px] max-lg:px-[25px] max-2xl:px-[50px] ${klass} ${
		standard ? 'standard' : ''
	}`}
>
	<slot />
</div>
