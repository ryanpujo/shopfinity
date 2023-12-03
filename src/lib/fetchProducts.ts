import type { Product } from "$lib";

export const fetchProducts = async (opts: {fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>}) => {
  const sendReq = opts.fetch ?? fetch
  const res = await sendReq('https://dummyjson.com/products?limit=100');
  const products: Product[] = (await res.json()).products;
  return products;
}