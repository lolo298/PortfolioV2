<script lang="ts">
	import Competence from '$lib/components/Competence.svelte';
</script>

<svelte:head>
	<title>Lorenzo Aoulini</title>
	<meta name="title" content="Lorenzo Aoulini">
	<meta name="description" content="Lorenzo Aoulini - Développeur FullStack">
	<meta name="keywords" content="Lorenzo Aoulini, Développeur FullStack, Développeur Web, Développeur FrontEnd, Développeur BackEnd">
	<meta property="og:title" content="Lorenzo Aoulini">
	<meta property="og:description" content="Lorenzo Aoulini - Développeur FullStack">
	<meta property="og:image" content="§$assets/img/Lorenzo.jpg§">
	<meta property="og:url" content="https://lorenzoa.dev">
</svelte:head>

<figure>
	<blockquote class="py-8">
		<p class="text-xl md:text-3xl lg:text-4xl xl:text-5xl">
			C'est là que j'ai réalisé qu'aussi terrifiante et douloureuse que soit la réalité, c'est aussi
			le seul endroit où vous pouvez trouver le vrai bonheur. Parce que la réalité est réelle.
		</p>
	</blockquote>
	<figcaption class="md:text-xl lg:text-2xl xl:text-3xl">
		<cite>James Halliday dans player one de Ernest Cline</cite>
	</figcaption>
</figure>

<div class="images sticky !p-0 grid grid-cols-image-3 gap-5 items-center">
	<enhanced:img src="$assets/img/iut.png" alt="IUT lannion" class="mx-auto aspect-[11/13] object-cover flex-[11] lg:aspect-[18/12]" />
	<enhanced:img src="$assets/img/Lorenzo.jpg" alt="Lorenzo Aoulini" class="mx-auto aspect-[19/23] object-cover flex-[19] lg:w-1/2" />
	<enhanced:img src="$assets/img/Code.png" alt="La croix rouge - La salle" class="mx-auto aspect-[7/16] object-cover flex-[7] object-[5%] lg:aspect-[11/13] lg:w-2/3 lg:object-left"  />
</div>

<div>
	<h2 class="atext-2xl md:text-4xl lg:text-5xl mb-8">A propos de moi</h2>
	<p class="md:text-3xl lg:text-4xl">
		Je suis développeur full-stack et également alternant chez bimeo.
		Passionné par le domaine du développement et de la tech, je suis toujours à la recherche de nouveaux projets pour mettre mes compétences à l'épreuve.
	</p>
</div>

<div class="bg-primary !py-16 !px-8 flex flex-col items-center rounded-lg">
	<h2 class="mb-8 text-white text-4xl lg:text-5xl">Compétences</h2>
	<div class="flex flex-wrap gap-12 justify-center">
		<Competence icon="§$assets/img/typescript.svg§">TypeScript</Competence>
		<Competence icon="§$assets/img/svelte.svg§">Svelte</Competence>
		<Competence icon="§$assets/img/react.svg§">React</Competence>
		<Competence icon="§$assets/img/php.png§">PHP</Competence>
		<Competence icon="§$assets/img/sf.svg§">Symfony</Competence>
		<Competence icon="§$assets/img/figma.svg§">Figma</Competence>
	</div>
</div>

<div class="!p-0 md:!p-20 lg:!p-28">
	<h2 class="text-2xl mb-8 p-2 md:text-3xl lg:text-4xl">Experience</h2>
	<div class="divide-y-2 divide-black *:p-2">
		<div class="grid grid-cols-experience gap-4 justify-center items-center py-5 text-xl md:text-3xl lg:text-4xl">
			<span class="text-sm md:text-xl lg:text-2xl">2024</span>
			<span>Développeur FullStack</span>
			<span class="text-end">Bimeo</span>
		</div>
		<div class="grid grid-cols-experience gap-4 justify-center items-center py-5 text-xl md:text-3xl lg:text-4xl">
			<span class="text-sm md:text-xl lg:text-2xl">2022 - 2023</span>
			<span>Développeur FullStack</span>
			<span class="text-end">Icicartegrise</span>
		</div>
		<div class="grid grid-cols-experience gap-4 justify-center items-center py-5 text-xl md:text-3xl lg:text-4xl">
			<span class="text-sm md:text-xl lg:text-2xl">2021 - 2024</span>
			<span>BUT MMI - option développement web</span>
		</div>
		<div class="grid grid-cols-experience gap-4 justify-center items-center py-5 text-xl md:text-3xl lg:text-4xl">
			<span class="text-sm md:text-xl lg:text-2xl">2021</span>
			<span>Bac STI2D - option SIN</span>
		</div>
	</div>
</div>
