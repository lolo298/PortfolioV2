<script lang="ts">
	import Competence from '$lib/components/Competence.svelte';
	import iutImg from '$lib/img/iut.png?enhanced';
	import reactIcon from '$lib/img/react.svg?enhanced';
	import svelteIcon from '$lib/img/svelte.svg?enhanced';
</script>

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

<div class="sticky !p-0 grid grid-cols-image-3 gap-5 items-center">
	<enhanced:img src={iutImg} alt="IUT lannion" class="aspect-[11/13]" />
	<enhanced:img src={iutImg} alt="IUT lannion" class="aspect-[19/23]" />
	<enhanced:img src={iutImg} alt="IUT lannion" class="aspect-[7/16]" />
</div>

<div>
	<h2 class="atext-2xl md:text-4xl lg:text-5xl mb-8">A propos de moi</h2>
	<p class="md:text-3xl lg:text-4xl">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie sit amet elit non
		maximus. Praesent viverra felis in faucibus congue. Vivamus eget magna eu enim eleifend dictum.
		Aliquam condimentum vestibulum nulla eget tincidunt. Nunc id ultrices ex. Nunc vulputate purus
		eget leo faucibus volutpat.
	</p>
</div>

<div class="bg-primary !py-16 !px-8 flex flex-col items-center rounded-lg">
	<h2 class="mb-8 text-white text-4xl lg:text-5xl">Compétences</h2>
	<div class="flex flex-wrap gap-12 justify-center">
		<Competence icon="§$lib/img/typescript.svg§">TypeScript</Competence>
		<Competence icon="§$lib/img/svelte.svg§">Svelte</Competence>
		<Competence icon="§$lib/img/react.svg§">React</Competence>
		<Competence icon="§$lib/img/php.png§">PHP</Competence>
		<Competence icon="§$lib/img/figma.svg§">Figma</Competence>
	</div>
</div>

<div class="!p-0 md:!p-20 lg:!p-28">
	<h2 class="text-2xl mb-8 p-2 md:text-3xl lg:text-4xl">Experience</h2>
	<div class="divide-y-2 divide-black *:p-2">
		<div class="flex justify-between items-baseline py-5 text-xl md:text-3xl lg:text-4xl">
			<span class="text-sm md:text-xl lg:text-2xl">2024</span>
			<span>Developpeur Back</span>
			<span>Bimeo</span>
		</div>
		<div class="flex justify-between items-baseline py-5 text-xl md:text-3xl lg:text-4xl">
			<span class="text-sm md:text-xl lg:text-2xl">2024</span>
			<span>Developpeur Back</span>
			<span>Bimeo</span>
		</div>
		<div class="flex justify-between items-baseline py-5 text-xl md:text-3xl lg:text-4xl">
			<span class="text-sm md:text-xl lg:text-2xl">2024</span>
			<span>Developpeur Back</span>
			<span>Bimeo</span>
		</div>
		<div class="flex justify-between items-baseline py-5 text-xl md:text-3xl lg:text-4xl">
			<span class="text-sm md:text-xl lg:text-2xl">2024</span>
			<span>Developpeur Back</span>
			<span>Bimeo</span>
		</div>
		<div class="flex justify-between items-baseline py-5 text-xl md:text-3xl lg:text-4xl">
			<span class="text-sm md:text-xl lg:text-2xl">2024</span>
			<span>Developpeur Back</span>
			<span>Bimeo</span>
		</div>
	</div>
</div>
