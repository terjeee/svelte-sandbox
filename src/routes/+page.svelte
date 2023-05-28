<script lang="ts">
	import Graf_01 from '$lib/components/Graf_01/Graf_01.svelte';
	import Aftenposten from '$lib/components/Aftenposten/Aftenposten.svelte';
</script>

<svelte:head>
	<title>Svelte Sandbox</title>
</svelte:head>

<main>
	<Graf_01 />
	<Aftenposten />
</main>

<style lang="scss">
	main {
		margin: 0 auto;
		max-width: 800px;
		display: flex;
		flex-direction: column;
		gap: 8rem;
		display: flex;
		flex-direction: column;
	}
</style>
