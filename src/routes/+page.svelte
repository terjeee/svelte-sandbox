<script lang="ts">
	import Scatterplot from '$lib/components/Scatterplot/Scatterplot.svelte';
	import Aftenposten from '$lib/components/Aftenposten/Aftenposten.svelte';
	import Divider01 from '$lib/components/Divider/Divider01.svelte';
	import Divider02 from '$lib/components/Divider/Divider02.svelte';
	import D3 from '$lib/components/D3/D3.svelte';
</script>

<svelte:head>
	<title>Svelte Sandbox</title>
</svelte:head>

<main>
	<Scatterplot />
	<Divider01 />
	<Aftenposten />
	<Divider02 />
	<D3 />
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		gap: 10rem;
		display: flex;
		flex-direction: column;
	}
</style>
