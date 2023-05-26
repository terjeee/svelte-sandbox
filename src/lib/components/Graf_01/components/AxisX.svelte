<script lang="ts">
	export let height: number;
	export let xTicks: number[];
	export let xScale: d3.ScaleLinear<number, number, never>;
</script>

<g>
	{#each xTicks as tick}
		<text x={xScale(tick)} y={height}>{tick}</text>
	{/each}
</g>
