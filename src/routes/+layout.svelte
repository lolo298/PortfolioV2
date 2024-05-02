<script lang="ts">
	import '../app.css';
	import { navigating } from '$app/stores';
	import Loader from '$lib/components/Loader.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import NavbarMenu from '$lib/components/NavbarMenu.svelte';
	import { HamburgerMenuStore } from '$lib/store';
	import { onMount } from 'svelte';

	let loaded = false;
	let wrapper: HTMLDivElement;
	let isMounted = false;
	let scrollContent: HTMLDivElement;

	onMount(() => {
		isMounted = true;
	});

	navigating.subscribe((nav) => {
		if (nav) {
			scrollContent.scrollTo({
				top: 0,
				behavior: 'instant'
			})
		}
	});

	$: {
		if (isMounted) {
			if (loaded) {
				wrapper.classList.remove('overflow-hidden');
				window.onresize = () => {
					let vpHeight = window.innerHeight;
					console.log('scroll')
					scrollTo({
					top: vpHeight,
					behavior: 'smooth'
				});	
				};
				//@ts-ignore
				window.onresize()
			} else {
				wrapper?.classList.add('overflow-hidden');
				scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			}
		}
	}
</script>

<div class="full-screen overflow-hidden" bind:this={wrapper}>
	<Loader bind:loaded loadingTime={0} />
	<main id="page" class="relative p-4 lg:p-8 bg-secondary-100 h-screen">
		<NavbarMenu />
		<div bind:this={scrollContent} class="bg-white rounded-lg overflow-y-scroll overflow-x-hidden h-full">
			<Navbar />
			<div class="*:p-2 md:*:p-16 lg:*:p-20 xl:*:p-36 relative flex flex-col gap-16 text-base">
				<slot />
			</div>
		</div>
	</main>
</div>
