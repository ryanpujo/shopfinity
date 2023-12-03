import type { Product } from "$lib";
import { fetchProducts } from "$lib/fetchProducts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({fetch}) => {
  const products: Product[] = await fetchProducts({fetch});
  return {
    products
  };
}