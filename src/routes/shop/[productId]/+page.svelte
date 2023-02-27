<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  const { product } = data;
</script>

<div class="min-h-screen">
  <h1 class="font-bold text-xl text-left my-4">{product.title}</h1>
  <div class="flex flex-col gap-2">
    <img src={product.images[0]} alt={product.description} />
    <h2>{product.description}</h2>
    <h2>price: 💰{product.price}</h2>
  </div>
</div>
