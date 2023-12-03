export const load = async ({fetch}) => {
  const res = await fetch('https://dummyjson.com/products/categories');
  const categories: string[] = await res.json();
  return {
    categories
  }
}