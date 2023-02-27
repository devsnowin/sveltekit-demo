<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { products } = data;
</script>

<div class="w-full">
  <h1 class="font-bold text-xl text-left my-4">Products</h1>
  <div class="flex flex-col gap-2">
    {#each products as product}
      <a href={`/shop/${product.id}`} data-sveltekit-preload-data class="w-fit"
        >{product.title}</a
      >
    {/each}
  </div>
</div>
