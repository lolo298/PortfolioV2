<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	export let asElem: AsElem;

	type AsElem = 'a' | 'button';

	type AnchorProps = { asElem: 'a' } & HTMLAnchorAttributes;
	type ButtonProps = { asElem: 'button' } & HTMLButtonAttributes;

	type ElementProps = AnchorProps | ButtonProps;

	type $$Props = ElementProps;

	let { class: _, ...rest } = $$restProps;
</script>

<svelte:element
	this={asElem}
	class={twMerge(
		'bg-primary text-base text-white py-2 px-4 flex flex-center w-max rounded-full hover:text-primary-900',
		$$props.class
	)}
	{...rest}
>
	<slot /></svelte:element
>
