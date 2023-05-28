<script lang="ts">
	import type { Margin, xyScale } from '$lib/components/Scatterplot/types/types';

	export let margin: Margin;
	export let height: number;
	export let xTicks: number[];
	export let xScale: xyScale;
</script>

<g transform="translate({0})">
	{#each xTicks as tick, index}
		<text x={xScale(tick)} y={height - margin.bottom} dominant-baseline="hanging" dy="4">
			{index === 0 ? tick : `${tick}%`}<br />
		</text>
	{/each}
</g>

<style lang="scss">
	g {
		text {
			font-size: 0.85rem;
		}
	}
</style>
