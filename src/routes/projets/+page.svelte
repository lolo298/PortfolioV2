<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const { projects } = data;
</script>

{#each projects as project}
	<div class="flex flex-col gap-4">
		<h2 class="text-2xl">{project.title}</h2>
		<div>
			<div class="flex items-center gap-3">
				<div
					class="w-12 p-3 aspect-square rounded-full bg-primary/20 fill-primary flex flex-center"
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
		</div>
		<p>{project.description}</p>
		<Button asElem="a" href={project.url}>Voir plus</Button>
	</div>
{/each}
