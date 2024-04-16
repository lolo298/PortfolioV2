<script lang="ts">
	export let icon: string;
</script>

<div class="flex flex-col items-center text-white">
	<div class="w-12 p-3 aspect-square rounded-full bg-white/30">
		<img class="w-full" src={icon} alt="competence" />
	</div>
	<p><slot /></p>
</div>
