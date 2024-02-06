<script lang="ts">
	import { navigating } from "$app/stores";
  import { LoadingStore, Status } from "$lib/store";
  import anime from "animejs";
	import { onMount } from "svelte";


  export const duration = 20;


  navigating.subscribe((value) => {
    if (value && value?.to?.route) {
      LoadingStore.open();
    }
  });

  LoadingStore.subscribe((value) => {
    console.log(`LoadingStore: ${value}`);  
  })

  onMount(() => {
    console.log("onMount");
    anime({
      targets: ".pannel-left",
      keyframes: [
        {rotateY: 90, duration: 1000, easing: 'easeInSine'},
        {rotateY: 270, duration: 0, easing: 'linear'},
        {rotateY: 360, duration: 1000, easing: 'easeOutSine'},
      ],
      duration: 2000,
      loop: true,
      delay: anime.stagger(250, {direction: 'reverse'}),
      endDelay: 10000,
    })
    anime({
      targets: ".pannel-right",
      keyframes: [
        {rotateY: -90, duration: 1000, easing: 'easeInSine'},
        {rotateY: -270, duration: 0, easing: 'linear'},
        {rotateY: -360, duration: 1000, easing: 'easeOutSine'},
      ],
      duration: 2000,
      loop: true,
      delay: anime.stagger(250),
      endDelay: 10000,
    })
  });



</script>

<div class="fixed inset-0">
  <div class="relative full z-10">
    <h1 class="text-5xl text-white font-bold full text-center flex justify-center items-center flex-col"><span>Bonjour, je suis Lorenzo Aoulini</span><span>Dévellopeur Back-End</span></h1>
    <h1 class="text-5xl text-black bg-primary font-bold absolute inset-0 [clip-path:url(#clip0)] full text-center flex justify-center items-center flex-col"><span>Bonjour, je suis Lorenzo Aoulini</span><span>Dévellopeur Back-End</span></h1>
  </div>
  <div class="absolute inset-0 flex divide-x-2 divide-dashed divide-secondary-700">
    <div class="full divide-x-2 divide-secondary-700 flex [perspective:500px]">
      <div class="flex-[3] pannel-left bg-secondary-900"></div>
      <div class="flex-[2] pannel-left bg-secondary-900"></div>
      <div class="flex-[2] pannel-left bg-secondary-900"></div>
      <div class="flex-[2] pannel-left bg-secondary-900"></div>
      
      <div class="flex-[2] pannel-right bg-secondary-900 border-dashed"></div>
      <div class="flex-[2] pannel-right bg-secondary-900"></div>
      <div class="flex-[2] pannel-right bg-secondary-900"></div>
      <div class="flex-[3] pannel-right bg-secondary-900"></div>
    </div>
  </div>
<div class="absolute ">

  <svg
  width="100%"
  height="100%"
  viewBox="0 0 1 1"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  >
  <clipPath id="clip0" clipPathUnits="objectBoundingBox" style="transform: translateX(200px) translateY(400px) scale(0.001111111111, 0.0005555555556);">
    <path d="M146.2 -131.2C176.6 -78.4 179.7 -18.3 164.8 33.9C149.9 86.1 117.1 130.4 66.4 165.4C15.8 200.3 -52.6 225.8 -115.4 207.8C-178.2 189.8 -235.3 128.3 -251.5 57.4C-267.7 -13.5 -242.9 -93.7 -194.2 -150.7C-145.4 -207.6 -72.7 -241.3 -7.4 -235.4C57.9 -229.5 115.7 -183.9 146.2 -131.2" >
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
    <!-- <path
    fill="black"
    d="M97.1 -97.1C122.1 -72.1 136.1 -36.1 153.4 17.3C170.7 70.7 191.4 141.4 166.4 179.3C141.4 217.1 70.7 222 4.1 217.9C-62.5 213.8 -124.9 200.6 -156.1 162.8C-187.3 124.9 -187.1 62.5 -182.3 4.8C-177.5 -52.8 -167.9 -105.6 -136.8 -130.6C-105.6 -155.6 -52.8 -152.8 -8.4 -144.4C36.1 -136.1 72.1 -122.1 97.1 -97.1"
    class="md:scale-[.25] translate-x-1/2 translate-y-1/2 scale-[.35] ">
    <animate
    attributeName="d"
    values="
    M97.1 -97.1C122.1 -72.1 136.1 -36.1 153.4 17.3C170.7 70.7 191.4 141.4 166.4 179.3C141.4 217.1 70.7 222 4.1 217.9C-62.5 213.8 -124.9 200.6 -156.1 162.8C-187.3 124.9 -187.1 62.5 -182.3 4.8C-177.5 -52.8 -167.9 -105.6 -136.8 -130.6C-105.6 -155.6 -52.8 -152.8 -8.4 -144.4C36.1 -136.1 72.1 -122.1 97.1 -97.1;
    M116.7 -111C161.7 -71.7 215.8 -35.8 233.3 17.4C250.7 70.7 231.4 141.4 186.4 183.9C141.4 226.4 70.7 240.7 11.8 228.9C-47.1 217.1 -94.3 179.3 -125.9 136.8C-157.6 94.3 -173.8 47.1 -167.9 5.9C-162 -35.4 -134 -70.7 -102.4 -110C-70.7 -149.4 -35.4 -192.7 0.2 -192.9C35.8 -193.2 71.7 -150.3 116.7 -111;
    M137.7 -134.9C172.2 -103.2 189.6 -51.6 186.7 -2.9C183.7 45.7 160.5 91.5 126 116.5C91.5 141.5 45.7 145.7 -12.5 158.2C-70.7 170.7 -141.4 191.4 -189.3 166.4C-237.1 141.4 -262 70.7 -259.5 2.6C-256.9 -65.5 -226.7 -131.1 -178.9 -162.7C-131.1 -194.4 -65.5 -192.2 -7 -185.2C51.6 -178.3 103.2 -166.6 137.7 -134.9;
    M97.1 -97.1C122.1 -72.1 136.1 -36.1 153.4 17.3C170.7 70.7 191.4 141.4 166.4 179.3C141.4 217.1 70.7 222 4.1 217.9C-62.5 213.8 -124.9 200.6 -156.1 162.8C-187.3 124.9 -187.1 62.5 -182.3 4.8C-177.5 -52.8 -167.9 -105.6 -136.8 -130.6C-105.6 -155.6 -52.8 -152.8 -8.4 -144.4C36.1 -136.1 72.1 -122.1 97.1 -97.1
    "
    dur={`10s`}
    repeatCount="indefinite"
    />
  </path> -->
</clipPath>
</svg>
</div>
</div>