<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
	const { project } = data;
</script>

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
	<section class="flex flex-col gap-4 mt-4">
		<div class="w-full overflow-hidden rounded-md">
			<img src="https://picsum.photos/200/300" alt="random image" class="w-full aspect-[4/5]" />
		</div>
		<div class="w-full overflow-hidden rounded-md">
			<img src="https://picsum.photos/300/200" alt="random image" class="w-full aspect-[4/5]" />
		</div>
		<div class="w-full overflow-hidden rounded-md">
			<img src="https://picsum.photos/400/400" alt="random image" class="w-full aspect-[4/5]" />
		</div>
	</section>
</div>
