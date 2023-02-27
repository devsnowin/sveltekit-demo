import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const productsData = await res.json();
    return productsData.products;
  };

  return {
    products: fetchProducts(),
  };
}) satisfies PageLoad;
