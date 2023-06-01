<script lang="ts">
	import Scatterplot from '$lib/components/Scatterplot/Scatterplot.svelte';
	import Aftenposten from '$lib/components/Aftenposten/Aftenposten.svelte';
	// import Divider from '$lib/components/Divider/Divider.svelte';
	import UnovisLineChart from '$lib/components/Unovis/UnovisLineChart.svelte';
	import Dialog from '$lib/components/Dialog(Modal)/Dialog.svelte';
	import MapLibre from '$lib/components/MapLIbre/MapLibre.svelte';
</script>

<svelte:head>
	<title>Svelte Sandbox</title>
</svelte:head>

<main>
	<Scatterplot />
	<!-- <Divider /> -->
	<Aftenposten />
	<!-- <Divider /> -->
	<UnovisLineChart />
	<!-- <Divider /> -->
	<Dialog />
	<!-- <Divider /> -->
	<MapLibre />
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
