<script lang="ts">
	import { navigating } from '$app/stores';
	import { HamburgerMenuStore } from '$lib/store';
	import Links from './Links.svelte';
	import Pages from './Pages.svelte';
	


	function toggleMenu() {
		HamburgerMenuStore.toggle();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="fixed inset-0 bg-secondary-950 z-20 p-4 transition-transform flex flex-col justify-between"
	class:translate-x-full={!$HamburgerMenuStore}
	on:click={(e) => {
		// @ts-ignore
		if ((e.target)?.tagName !== 'A') return;
		HamburgerMenuStore.close();
		}}
>
	<div class="h-12 flex justify-between items-center px-4 text-primary-500">
		<span class="px-2 font-bold">Lorenzo Aoulini</span>
		<button on:click={toggleMenu} aria-label="menu"><i class="fa-solid fa-x text-2xl"></i></button>
	</div>

	<div class="h-1/2 flex flex-col justify-evenly items-center text-5xl text-white">
		<Pages />
	</div>
	<div class="h-12 flex justify-evenly text-xl text-primary-500">
		<Links />
	</div>
</div>
