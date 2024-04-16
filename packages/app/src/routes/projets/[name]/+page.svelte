<script lang="ts">
	import { page } from '$app/stores';
	import Portal from 'svelte-portal';
	import type { PageData } from './$types';
	import anime from 'animejs';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { RemToPx } from '$lib/utils';
	import Viewer from '$lib/components/Viewer.svelte';
	import { viewer } from '$lib/actions';
	import { ViewerStore } from '$lib/store';

	export let data: PageData;
	const { project } = data;

	let showPage = false;
</script>

<Viewer />
<div class="p-2">
	<section>
		<h2 class="text-5xl mt-10">{project.title}</h2>
		<div class="flex gap-4 flex-col my-8">
			<div>
				<p class="text-xl">Role</p>
				<p>{project.role}</p>
			</div>
			<div>
				<p class="text-xl">Client</p>
				<p>{project.client}</p>
			</div>
			<div>
				<p class="text-xl">Date</p>
				<p>{project.date}</p>
			</div>
		</div>
	</section>
	<section class="text-xl">
		<p>{project.content}</p>
	</section>
	{#if project.images.length > 0}
		<section class="flex flex-col gap-4 mt-4">
			{#each project.images as image}
				<div class="w-full overflow-hidden rounded-md">
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
