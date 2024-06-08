<script lang="ts">
	import Portal from 'svelte-portal';
	import { ViewerStore } from '$lib/store';
	import { onMount } from 'svelte';
	import { RemToPx } from '$lib/utils';
	import anime from 'animejs';
	import { onNavigate } from '$app/navigation';

	let initialY = 0;
	let viewer: HTMLImageElement;

	onMount(() => {
		if (window.scrollY > 0) {
			initialY = window.scrollY;
		} else {
			document.onscrollend = () => {
				initialY = window.scrollY;
			};
			window.addEventListener('resize', () => {
				ViewerStore.close();
				initialY = window.innerHeight
			});
		}
	});

	onNavigate(() => {
		ViewerStore.close();
	});

	ViewerStore.subscribe(({ isOpen, pos, src, node }) => {
		if (isOpen) {
			anime({
				targets: viewer,
				width: [node?.width, pos.width],
				height: [node?.height, pos.height],
				top: [pos.y + (node?.scrollTop ?? 0), pos.top],
				left: [pos.x, pos.left],
				duration: 1000,
				easing: 'easeInOutQuad'
			});
		}
	});
</script>

<Portal>
	<div
		on:click={(e) => {
			e.target === e.currentTarget && ViewerStore.close();
		}}
		on:keydown={(e) => e.key === 'Escape' && ViewerStore.close()}
		role="button"
		tabindex="0"
		class="absolute h-screen w-screen bg-black/50 z-50 p-4 overflow-hidden"
		style={`top: ${initialY}px`}
		class:hidden={!$ViewerStore.isOpen}
	>
		<button class="absolute top-4 right-4 z-50"  on:click={ViewerStore.close}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 fill-black">
				<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
			</svg>
		</button>
		<img
			bind:this={viewer}
			class="absolute w-0 h-0 bg-secondary-50"
			src={$ViewerStore.src}
			alt=""
			style="left: 0;top: 0;"
		/>
	</div>
</Portal>
