<script lang="ts">
	import type { Margin, xyScale } from '$lib/components/Graf_01/types/types';

	export let margin: Margin;
	export let height: number;
	export let xTicks: number[];
	export let xScale: xyScale;
</script>

<g transform="translate({margin.left})">
	{#each xTicks as tick, index}
		<text x={xScale(tick)} y={height - margin.bottom} dominant-baseline="hanging" dy="4"
			>{index === 0 ? tick : `${tick}%`}</text
		>
	{/each}
</g>
