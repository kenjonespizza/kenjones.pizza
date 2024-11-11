<script lang="ts">
  import { theme } from "../lib/stores";

  const swapTheme = () => {
    let setThemeto = $theme === "light" ? "dark" : "light";

    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add(setThemeto);
    theme.set(setThemeto);
    window.localStorage.setItem("theme", setThemeto);
  };
</script>

<button on:click={swapTheme}>
  {#if $theme === "light"}
    <slot name="light" />
  {:else}
    <slot name="dark" />
  {/if}
</button>
