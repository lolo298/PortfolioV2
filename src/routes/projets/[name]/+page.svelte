<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import Viewer from '$lib/components/Viewer.svelte';
	import { viewer } from '$lib/actions';

	export let data: PageData;
	const { project } = data;

	let showPage = false;
</script>

<Viewer />
<div class="p-2">
	<section>
		<h2 class="text-5xl mt-10">{project.title}</h2>
		<div class="flex gap-4 flex-col my-8 md:flex-row md:gap-36 xl:gap-48">
			<div>
				<p class="text-xl md:text-2xl">Role</p>
				<p class="lg:text-xl">{project.role}</p>
			</div>
			<div>
				<p class="text-xl md:text-2xl">Client</p>
				<p class="md:text-xl">{project.client}</p>
			</div>
			<div>
				<p class="text-xl md:text-2xl">Date</p>
				<p class="md:text-xl">{project.date}</p>
			</div>
		</div>
	</section>
	<section class="text-xl md:text-3xl lg:text-4xl">
		<p>{project.content}</p>
	</section>
	{#if project.images.length > 0}
		<section class="flex flex-col gap-4 mt-4 md:grid grid-cols-2">
			{#each project.images as image, i}
				<div class="w-full overflow-hidden rounded-md" class:col-span-2={i === 0}>
					<img
						use:viewer
						src={image.src}
						alt={image.alt}
						class="w-full aspect-[4/5] object-cover"
					/>
				</div>
			{/each}
		</section>
	{/if}
</div>
