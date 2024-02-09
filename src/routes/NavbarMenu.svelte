<script lang="ts">
	import { HamburgerMenuStore } from '$lib/store';

	function toggleMenu() {
		HamburgerMenuStore.toggle();
	}
</script>

<div
	class="fixed inset-0 bg-secondary-900 z-10 p-4 transition-transform flex flex-col justify-between"
	class:translate-x-full={$HamburgerMenuStore}
>
	<div class="h-12 flex justify-between items-center px-4 text-primary">
		<span class="bg-secondary-600 px-2 font-bold">Lorenzo Aoulini</span>
		<button on:click={toggleMenu}><i class="fa-solid fa-x text-2xl"></i></button>
	</div>

	<div class="h-1/2 flex flex-col justify-evenly items-center text-5xl text-white">
		<a href="/">A propos</a>
		<a href="/">Projets</a>
		<a href="/">Mon CV</a>
	</div>
	<div class="h-12 flex justify-evenly text-xl text-primary">
		<a href="/">Linkedin</a>
		<a href="/">Github</a>
		<a href="/">Mail</a>
	</div>
</div>
