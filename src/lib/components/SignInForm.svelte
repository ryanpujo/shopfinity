<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import InputIcon from "./InputIcon.svelte";
	import type { FormEventHandler, KeyboardEventHandler } from "svelte/elements";


const formData = {
		email: '',
		password: '',
	};
const dispatch = createEventDispatcher();
const handleFormChange: FormEventHandler<HTMLFormElement> = (e) => {
  dispatch('forminput', {
    email: formData.email,
    password: formData.password,
  });
};
const handleInput = (field: 'email' | 'password') => (e: CustomEvent<{value: string}>) => formData[field] = e.detail.value;
let clazz = '';
export {clazz as class};
</script>

<form on:change={handleFormChange} class="modal-form {clazz}">
  <label class="label" for="email">
    <span aria-label="email">Email</span>
    <InputIcon on:input={handleInput('email')} prependIcon='mdi-email' prependIconSize='1em' type="email" placeholder="Enter email address..." />
  </label>
  <label for="password" class="label">
    <span>Password</span>
    <InputIcon on:input={handleInput('password')} prependIcon='mdi-lock' prependIconSize='1em' class="input" type="password" placeholder="Enter correct password..." />
  </label>
</form>