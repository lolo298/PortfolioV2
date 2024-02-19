<script lang="ts">
	import '../app.css';
	import { navigating } from '$app/stores';
	import Loader from '$lib/components/Loader.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import NavbarMenu from '$lib/components/NavbarMenu.svelte';

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
		<div class="bg-white rounded-lg overflow-y-scroll overflow-x-hidden h-full">
			<Navbar />
			<div class="*:p-2 relative flex flex-col gap-16">
				<slot />
			</div>
		</div>
	</main>
</div>
