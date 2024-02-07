<script lang="ts">
	import '../app.css';
	import { navigating } from '$app/stores';
	import Loader from './Loader.svelte';

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
	<Loader bind:loaded />

	<a href="/">Home</a>
	<a href="/tmp">About</a>

	<slot />
</div>
