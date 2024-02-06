<script lang="ts">
  import "../app.css";
  import { navigating } from "$app/stores";
	import Loader from "./Loader.svelte";
  $: console.log($navigating);
</script>

<Loader />

<a href="/">Home</a>
<a href="/tmp">About</a>

<slot />
