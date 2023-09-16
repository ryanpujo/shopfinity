import type { Product } from "$lib";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({fetch}) => {
  const res = await fetch('https://dummyjson.com/products?limit=1000');
  const products: Product[] = (await res.json()).products;
  return {
    products
  };
}