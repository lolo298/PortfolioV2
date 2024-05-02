<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const { projects } = data;
</script>

{#each projects as project, i}
	<div
		class={`flex justify-between items-center ${i % 2 ? 'flex-row-reverse md:!pl-0' : 'md:!pr-0'}`}
	>
		<div class="flex flex-col gap-4 md:gap-6">
			<h2 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{project.title}</h2>
			<div class="flex items-center gap-3 md:text-xl xl:text-2xl">
				<div
					class="w-12 p-3 aspect-square rounded-full bg-primary/20 fill-primary flex flex-center xl:w-16"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						class="fill-primary w-10/12"
					>
						<path
							d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
						/>
					</svg>
				</div>
				<div>
					<span class="font-bold">Client: </span>
					<span>{project.client}</span>
				</div>
			</div>
			<p class="md:text-xl xl:text-2xl">{project.description}</p>
			<Button class="md:text-xl xl:text-2xl" asElem="a" href={project.url}>Voir plus</Button>
		</div>
		<img src={project.images[0].src} alt={project.images[0].alt} class="hidden md:block md:w-1/2 xl:w-1/3" />
	</div>
{/each}
