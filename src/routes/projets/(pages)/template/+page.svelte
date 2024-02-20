<script context="module">
	export let metadata = {
		title: 'Mon projet template',
		description: 'Description de mon projet template',
		role: 'Dev',
		client: 'Gregoire',
		date: '2023-2024',
		content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur porro modi delectus possimus obcaecati,
       dolorem quae molestias soluta facilis praesentium nam consequatur hic quaerat quidem eum ipsum magni doloribus officiis?`
	};
</script>

<section>
	<h2 class="text-5xl mt-10">{metadata.title}</h2>
	<div class="flex gap-4 flex-col my-8">
		<div>
			<p class="text-xl">Role</p>
			<p>{metadata.role}</p>
		</div>
		<div>
			<p class="text-xl">Client</p>
			<p>{metadata.client}</p>
		</div>
		<div>
			<p class="text-xl">Date</p>
			<p>{metadata.date}</p>
		</div>
	</div>
</section>
<section class="text-xl">
	<p>{metadata.content}</p>
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
