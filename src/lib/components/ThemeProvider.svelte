<script lang="ts">
	type Props = {
		theme: 'gum' | 'berry' | 'sauce' | 'cheese';
		mode: 'light' | 'dark';
		class: string;
		tag?: string;
	};

	let { theme, mode, tag = 'div', class: classes } = $props() as Props;

	let themes = new Map([
		['gum', '--color-primary: var(--color-gum); --color-primary-text: var(--color-dark)'],
		['berry', '--color-primary: var(--color-berry); --color-primary-text: var(--color-dark)'],
		['sauce', '--color-primary: var(--color-sauce); --color-primary-text: var(--color-light)'],
		['cheese', '--color-primary: var(--color-cheese); --color-primary-text: var(--color-dark)']
	]);

	let modes = new Map([
		['light', 'bg-light text-dark'],
		['dark', 'bg-dark text-light']
	]);

	let toggle = () => {
		mode = mode === 'light' ? 'dark' : 'light';
	};
</script>

<svelte:element
	this={tag}
	style={`${themes.get(theme)}`}
	class={`bg-light text-dark dark:bg-dark dark:text-light ${mode} ${classes} relative`}
>
	<button
		class="bg-berry hover:bg-sauce absolute right-0 bottom-0 z-50 cursor-pointer p-2"
		onclick={toggle}>Toggle</button
	>
	<slot />
</svelte:element>
