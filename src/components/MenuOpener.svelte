<script>
  import { isMenuOpen } from "../lib/stores";
  const toggleMenu = () => {
    isMenuOpen.set(!$isMenuOpen);
  };
</script>

<button on:click={toggleMenu}>
  {#if $isMenuOpen}
    <slot name="open" />
  {:else}
    <slot name="closed" />
  {/if}
</button>
