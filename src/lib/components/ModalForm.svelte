<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	// Stores
	import { ProgressRadial, getModalStore } from '@skeletonlabs/skeleton';
	import FormStore from '$lib/stores/FormStore';
	import SignInForm from './SignInForm.svelte';
	import { getFirebaseAuth } from '$lib/config/firebase_config';
	import { getFirebaseErrorMessage } from '$lib/error';
	import { FirebaseError } from 'firebase/app';
	import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
	import SignUpForm from './SignUpForm.svelte';
	import authStore from '$lib/stores/authStore';

	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

	// Form Data
	const formData = {
		email: '',
		password: '',
		username: '',
	};
let errMessage: string | null = null;
let isLoading: boolean = false;
const handleSignIn =async () => {
	isLoading = true;
	const auth = getFirebaseAuth();
	try {
	  await signInWithEmailAndPassword(auth, formData.email, formData.password);
	  errMessage = null;
		modalStore.close();
	} catch (error) {
	  if (error instanceof FirebaseError) {
			errMessage = getFirebaseErrorMessage(error.code);
	  }
	}
	isLoading = false;
}
const handleSignUp =async () => {
	isLoading = true;
	const auth = getFirebaseAuth();
	try {
	  const cred = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
	  await updateProfile(cred.user, {
			displayName: formData.username
	  });
		errMessage = null;
		await $authStore.user?.reload();
		authStore.set({
			user: auth.currentUser,
			isLoggedIn: auth.currentUser != null
		});
		modalStore.close();
	} catch (error) {
	  if (error instanceof FirebaseError) {
			errMessage = getFirebaseErrorMessage(error.code);
	  }
	}
	isLoading = false;
}
async function onFormSubmit() {
	if ($FormStore.type === 'loggedin') {
		await handleSignIn();
	} else {
		await handleSignUp();
	}
}

	// Base Classes
	const cBase = 'card p-4 w-modal-slim shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
	const handleSignInForm = (e: CustomEvent) => {
		formData.email = e.detail.email;
		formData.password = e.detail.password;
	};
	const handleSignUpForm = (e: CustomEvent) => {
		formData.email = e.detail.email;
		formData.password = e.detail.password;
		formData.username = e.detail.username;
	};	
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>{$FormStore.title}</header>
		<article>{$FormStore.description ?? ''}</article>
		<!-- Enable for debugging: -->
		{#if !isLoading}	
			{#if $FormStore.type === 'loggedin'}
			<SignInForm on:forminput={handleSignInForm} class="{cForm}" />
			{:else}
			<SignUpForm on:forminput={handleSignUpForm} class='{cForm}' />
			{/if}
		{:else}
		<div class="flex justify-center">
			<ProgressRadial  value={undefined} />
		</div>
		{/if}

		{#if $FormStore.type == 'loggedin'}
		<p class="text-xs">Don't have an account? <button class="text-blue-300" on:click={() => FormStore.set({
			type: 'register',
			title: 'Sign up for free',
		})}>Register here</button></p>
		{:else}
		<p class="text-xs">Already have an account? <button class="text-blue-300" on:click={() => FormStore.set({
			type: 'loggedin',
			title: 'Sign in',
		})}>Sign in here</button></p>
		{/if}
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
    </footer>
	</div>
{/if}