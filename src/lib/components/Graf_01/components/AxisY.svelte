<script lang="ts">
	export let yTicks: number[];
	export let yScale: d3.ScaleLinear<number, number, never>;
</script>

<g>
	{#each yTicks as tick}
		<text x="0" y={yScale(tick)}>{tick}</text>
	{/each}
</g>
