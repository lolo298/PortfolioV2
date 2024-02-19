<script lang="ts">
	import { navigating } from '$app/stores';
	import { LoadingStore, Status } from '$lib/store';
	import anime from 'animejs';
	import { onMount } from 'svelte';

	const duration = 20;
	export let loadingTime = 10000;
	export let loaded = false;
	let loadingText = 'Loading';

	navigating.subscribe((value) => {
		if (value && value?.to?.route) {
			LoadingStore.open();
		}
	});

	onMount(() => {
		const animeLeft = anime({
			targets: '.pannel-left',
			keyframes: [
				{ rotateY: -20, duration: 1000, easing: 'easeInSine' },
				{ rotateY: 0, duration: 1000, easing: 'easeOutSine' }
			],
			duration: 2000,
			loop: true,
			delay: anime.stagger(250, { direction: 'reverse' }),
			endDelay: 1000
		});
		const animeRight = anime({
			targets: '.pannel-right',
			keyframes: [
				{ rotateY: 20, duration: 1000, easing: 'easeInSine' },
				{ rotateY: 0, duration: 1000, easing: 'easeOutSine' }
			],
			duration: 2000,
			loop: true,
			delay: anime.stagger(250),
			endDelay: 1000
		});

		let loadingDots = 0;

		const textInterval = setInterval(() => {
			loadingDots = (loadingDots + 1) % 4;
			loadingText = 'Loading' + '.'.repeat(loadingDots);
		}, 850);

		setTimeout(() => {
			loaded = true;
			animeLeft.pause();
			animeRight.pause();

			animeLeft.seek(0);
			animeRight.seek(0);

			clearInterval(textInterval);

			loadingText = '';
			// anime({
			// 	targets: '.loading-text',
			// 	keyframes: [
			// 		{ opacity: 0.5, duration: 1000, easing: 'easeInSine' },
			// 		{ opacity: 1, duration: 1000, easing: 'easeOutSine' }
			// 	],
			// 	duration: 1000,
			// 	loop: true,
			// 	direction: 'alternate',
			// 	easing: 'easeInOutSine'
			// });
		}, loadingTime);
	});
</script>

<div class="full-screen">
	<div class="relative full z-10">
		<h1
			class="text-5xl text-white font-bold full text-center flex justify-center items-center flex-col"
		>
			<span>Bonjour, je suis Lorenzo Aoulini</span><span>Développeur Back-End</span>
		</h1>
		<h1
			class="text-5xl text-black bg-primary font-bold absolute inset-0 [clip-path:url(#clip0)] full text-center flex justify-center items-center flex-col"
		>
			<span>Bonjour, je suis Lorenzo Aoulini</span><span>Développeur Back-End</span>
		</h1>
	</div>
	<div
		class="absolute inset-0 full divide-x-2 divide-secondary-700 flex [perspective:500px] text-white overflow-hidden"
	>
		<span class="loading-text z-10 absolute inset-x-0 text-center top-3/4">{loadingText}</span>
		<span class="loading-text z-10 absolute inset-x-0 text-center bottom-3/4">{loadingText}</span>
		<div class="flex-[3] origin-left relative pannel-left bg-secondary-900"></div>
		<div class="flex-[2] origin-left relative pannel-left bg-secondary-900"></div>
		<div class="flex-[2] origin-left relative pannel-left bg-secondary-900"></div>
		<div class="flex-[2] origin-left relative pannel-left bg-secondary-900"></div>

		<div class="flex-[2] origin-right relative pannel-right bg-secondary-900 border-dashed"></div>
		<div class="flex-[2] origin-right relative pannel-right bg-secondary-900"></div>
		<div class="flex-[2] origin-right relative pannel-right bg-secondary-900"></div>
		<div class="flex-[3] origin-right relative pannel-right bg-secondary-900"></div>
	</div>
	<div class="absolute top-0 pointer-events-none">
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 1 1"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<clipPath
				id="clip0"
				clipPathUnits="objectBoundingBox"
				style="transform: translateX(90vw) translateY(90vh) scale(0.001111111111, 0.0005555555556);"
			>
				<path
					d="M146.2 -131.2C176.6 -78.4 179.7 -18.3 164.8 33.9C149.9 86.1 117.1 130.4 66.4 165.4C15.8 200.3 -52.6 225.8 -115.4 207.8C-178.2 189.8 -235.3 128.3 -251.5 57.4C-267.7 -13.5 -242.9 -93.7 -194.2 -150.7C-145.4 -207.6 -72.7 -241.3 -7.4 -235.4C57.9 -229.5 115.7 -183.9 146.2 -131.2"
				>
					<animate
						attributeName="d"
						values="
      M146.2 -131.2C176.6 -78.4 179.7 -18.3 164.8 33.9C149.9 86.1 117.1 130.4 66.4 165.4C15.8 200.3 -52.6 225.8 -115.4 207.8C-178.2 189.8 -235.3 128.3 -251.5 57.4C-267.7 -13.5 -242.9 -93.7 -194.2 -150.7C-145.4 -207.6 -72.7 -241.3 -7.4 -235.4C57.9 -229.5 115.7 -183.9 146.2 -131.2;
      M194.2 -162.4C235.1 -103.5 240.4 -23.7 216.8 37.5C193.3 98.6 140.9 141.2 86.4 160C31.9 178.8 -24.7 173.9 -88.2 154.4C-151.7 134.9 -222.1 100.8 -241.9 46.1C-261.7 -8.7 -230.9 -84.2 -182.2 -144.8C-133.4 -205.4 -66.7 -251.2 5 -255.2C76.6 -259.1 153.2 -221.2 194.2 -162.4;
      M163.4 -127.7C204.4 -79 225 -11.5 213.8 53.2C202.5 117.9 159.4 179.7 104.9 198.5C50.4 217.3 -15.5 193.1 -73.2 161.6C-130.9 130.1 -180.5 91.3 -206 32C-231.6 -27.3 -233.1 -107.2 -194.7 -155.3C-156.4 -203.4 -78.2 -219.7 -8.5 -212.9C61.2 -206.2 122.5 -176.3 163.4 -127.7;
      M139.2 -107.5C180.6 -59 214.6 -1.1 208.7 56.8C202.8 114.7 156.9 172.7 99.1 197.3C41.2 221.9 -28.6 213.2 -79.5 182.2C-130.3 151.1 -162.2 97.7 -184.8 32.4C-207.5 -32.8 -221 -109.9 -188.7 -156.3C-156.4 -202.7 -78.2 -218.3 -14.7 -206.7C48.9 -195 97.7 -155.9 139.2 -107.5;
      M146.2 -131.2C176.6 -78.4 179.7 -18.3 164.8 33.9C149.9 86.1 117.1 130.4 66.4 165.4C15.8 200.3 -52.6 225.8 -115.4 207.8C-178.2 189.8 -235.3 128.3 -251.5 57.4C-267.7 -13.5 -242.9 -93.7 -194.2 -150.7C-145.4 -207.6 -72.7 -241.3 -7.4 -235.4C57.9 -229.5 115.7 -183.9 146.2 -131.2;
      "
						dur={`${duration}s`}
						repeatCount="indefinite"
					/>
				</path>
			</clipPath>
		</svg>
	</div>
</div>
