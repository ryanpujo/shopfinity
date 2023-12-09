import type { Product } from "$lib";
import { fetchProducts } from "$lib/fetchProducts";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({fetch}) => {
  const products: Product[] = await fetchProducts({fetch});
  return {
    products
  };
}