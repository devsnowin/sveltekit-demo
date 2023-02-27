import type { PageLoad } from '../$types';

export const load = (async ({ params, fetch }) => {
  const fetchProduct = async (id: string) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();

    return data;
  };

  return {
    product: fetchProduct(params.productId),
  };
}) satisfies PageLoad;
