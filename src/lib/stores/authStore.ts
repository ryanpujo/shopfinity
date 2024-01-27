import { writable } from 'svelte/store';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { getFirebaseAuth } from '$lib/config/firebase_config';

const authStore = writable<{
	isLoggedIn: boolean;
	user: User | null;
}>(
	{
		isLoggedIn: false,
		user: null
	},
	(set) => {
		const unsubscribe = onAuthStateChanged(getFirebaseAuth(), (user) => {
			set({
				user,
				isLoggedIn: user != null,
			});
		});
		return () => unsubscribe();
	}
);

export default {
	set: authStore.set,
	subscribe: authStore.subscribe,
	update: authStore.update
};
