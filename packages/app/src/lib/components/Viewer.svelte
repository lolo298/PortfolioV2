<script lang="ts">
	import Portal from 'svelte-portal';
	import { ViewerStore } from '$lib/store';
	import { onMount } from 'svelte';
	import { RemToPx } from '$lib/utils';
	import anime from 'animejs';

	let initialY = 0;
	let viewer: HTMLImageElement;

	onMount(() => {
		document.onscrollend = () => {
			initialY = window.scrollY;
			document.onscrollend = null;
		};
	});

	ViewerStore.subscribe(({ isOpen, pos, src, node }) => {
		console.log('ViewerStore', pos);
		if (isOpen) {
			document.body.style.overflow = 'hidden';

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
		<img
			bind:this={viewer}
			class="absolute w-0 h-0"
			src={$ViewerStore.src}
			alt=""
			style="left: 0;top: 0;"
		/>
	</div>
</Portal>
