<script lang="ts">
	export let icon: string;
</script>

<div class="flex flex-col items-center text-white">
	<div
		class="size-12 md:size-20 p-3 aspect-square rounded-full bg-white/30 flex justify-center items-center"
	>
		<img class="w-2/3" src={icon} alt="competence" />
	</div>
	<p class="md:text-2xl"><slot /></p>
</div>
