<script lang="ts">
	import '../app.css';
	import { navigating } from '$app/stores';
	import Loader from './Loader.svelte';
	import Navbar from './Navbar.svelte';
	import NavbarMenu from './NavbarMenu.svelte';

	let loaded = false;
	let wrapper: HTMLDivElement;

	$: {
		if (loaded) {
			let vpHeight = window.innerHeight;
			wrapper.classList.remove('overflow-hidden');
			scrollTo({
				top: vpHeight,
				behavior: 'smooth'
			});
		}
	}
</script>

<div class="full-screen overflow-hidden" bind:this={wrapper}>
	<Loader bind:loaded loadingTime={0} />
	<main class="relative p-4 bg-secondary-600 h-screen">
		<NavbarMenu />
		<div class="bg-white rounded-lg overflow-scroll h-full">
			<Navbar />
			<div class="p-2">
				<slot />
			</div>
		</div>
	</main>
</div>
