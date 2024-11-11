<script lang="ts">
  import KJPLight from "/KJP-light.svg";
  import KJPDark from "/KJP-dark.svg";
  import { theme } from "../lib/stores";

  let code_sample: String = `
  <span class="text-cheese">let</span> learnMore <span class="text-sauce">=</span> 🍕 <span class="text-sauce">=></span> {
    <span class="text-icecream">if</span> <span class="text-sauce">(</span>🍕.toppings. <span class="text-berry">includes</span>(🍍)<span class="text-sauce">)</span> <span class="text-icecream">{</span>
        <span class="text-berry">return</span> <span class="text-cheese">"</span>Ken is a designer,
      developer, and birder<span class="text-cheese">"</span><span class="text-sauce">;</span>
    <span class="text-icecream">}</span>
  }`;
</script>

<div class="h-screen w-full flex items-center">
  <!-- Right Side -->
  <div
    class="transition bg-sauce dark:bg-cheese shadow-big-box-cheese h-full absolute right-0 w-[28%]"
  />

  <!-- Middle -->
  <div class="relative z-10 bg-green flex flex-col gap-0 w-auto">
    <div class="relative p-[4%] max-w-[617px]">
      <div
        class="transform -skew-x-12 h-full w-[40%] bg-gray dark:bg-sauce absolute right-0 top-0 rounded-2xl p-8 border-10 border-white dark:border-gray"
      />
      <img
        class="relative w-full z-10"
        alt="Ken Jones Pizza"
        src={$theme === "dark" ? KJPDark : KJPLight}
      />
    </div>

    <div class="text-gray dark:text-white relative">
      <!-- <Prism language="javascript" code={code_sample} header="Sameple R Code" /> -->
      <pre><code class=" font-code font-medium text-[20px]"
          >{@html code_sample}</code
        ></pre>
    </div>
  </div>
</div>
