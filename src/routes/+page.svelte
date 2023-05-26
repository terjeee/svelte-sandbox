<script lang="ts">
	import Graf_01 from '$lib/components/Graf_01.svelte';
	import Aftenposten from '$lib/components/Aftenposten.svelte';
</script>

<svelte:head>
	<title>Svelte Sandbox</title>
</svelte:head>

<main>
	<!-- <Graf_01 /> -->
	<Aftenposten />
</main>

<style lang="scss">
	main {
		max-width: 650px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
</style>
