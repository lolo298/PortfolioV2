<script lang="ts">
	import { HamburgerMenuStore } from '$lib/store';

	function toggleMenu() {
		HamburgerMenuStore.toggle();
	}
</script>

<nav class="relative h-12 z-0">
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
		<span class="bg-secondary-100 px-2 font-bold">Lorenzo Aoulini</span>
		<button on:click={toggleMenu}><i class="fa-solid fa-bars text-2xl"></i></button>
	</div>
</nav>
