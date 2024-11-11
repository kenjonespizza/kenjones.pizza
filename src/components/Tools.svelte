<script>
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
  import MenuOpener from "./MenuOpener.svelte";
  import Hamburglar from "./Hamburglar.svelte";
</script>

<div
  class="fixed top-0 right-0 p-[50px] z-10 flex gap-6 text-white dark:text-gray"
>
  <ThemeSwitcher>
    <div slot="dark">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="w-8 h-8"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          fill="currentColor"
          d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
        /></svg
      >
    </div>
    <div slot="light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="w-8 h-8"
        ><path fill="none" d="M0 0h24v24H0z" /><path
          fill="currentColor"
          d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
        /></svg
      >
    </div>
  </ThemeSwitcher>
  <MenuOpener>
    <div slot="open">
      <Hamburglar open={true} />
    </div>
    <div slot="closed">
      <Hamburglar />
    </div>
  </MenuOpener>
</div>
