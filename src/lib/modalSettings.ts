import type { ModalComponent, ModalSettings } from "@skeletonlabs/skeleton";
import ModalForm from "./components/ModalForm.svelte";

export const modalComponent: ModalComponent = {
	ref: ModalForm
};
export const modal: ModalSettings = {
	type: 'component',
	// Populates the input value and attributes
	component: modalComponent
};