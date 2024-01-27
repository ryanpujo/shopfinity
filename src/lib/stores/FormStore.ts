import { writable } from "svelte/store";


type FormType = {
  type: 'register' | 'loggedin';
  title: string;
  description?: string;
};
const showRegisterForm = writable<FormType>({
  type: 'loggedin',
  title: 'Sign in',
  description: 'Sign in to your account'
});

export default {
  subscribe: showRegisterForm.subscribe,
  set: showRegisterForm.set
}