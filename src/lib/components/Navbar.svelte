<script lang="ts">
	import { HamburgerMenuStore } from '$lib/store';
	import Links from './Links.svelte';
	import Pages from './Pages.svelte';

	function toggleMenu() {
		HamburgerMenuStore.toggle();
	}
</script>

<nav class="relative h-12 z-10">
	<div
		class="flex absolute inset-0 bg-white border-b-2 border-secondary-400/50 divide-x-2 divide-secondary-400/50 *:flex-1 -z-10"
	>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>

	<div class="flex justify-between items-center h-full px-4 text-primary">
		<span class="px-2 font-bold md:text-2xl xl:text-3xl">Lorenzo Aoulini</span>
		<button on:click={toggleMenu} class="md:hidden" aria-label="menu"
			><i class="fa-solid fa-bars text-2xl"></i></button
		>
		<div class="hidden md:flex text-xl xl:text-2xl gap-8">
			<Pages />
		</div>
		<div
			class="hidden md:flex flex-col fixed gap-4 top-1/2 md:left-2 lg:left-1/5 xl:left-14 z-50 bg-white p-4 rounded-full shadow-lg"
		>
			<Links />
		</div>
	</div>
</nav>
