import type { Product } from '$lib';
import { writable } from 'svelte/store';

const products = writable<Product[]>([]);

export default {
	subscribe: products.subscribe,
	set: products.set
};
