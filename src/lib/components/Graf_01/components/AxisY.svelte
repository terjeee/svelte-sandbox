<script lang="ts">
	import type { Margin, xyScale } from '../types/types';

	export let margin: Margin;
	export let yTicks: number[];
	export let yScale: xyScale;
	export let width: number;
</script>

<g transform="translate({margin.left} {margin.top})">
	{#each yTicks as tick, index}
		<text x="0" y={yScale(tick)} dy="-4"
			>{index === 0 ? '' : tick} {yTicks.length - 1 === index ? ' hours studied' : ''}
		</text>
		<line x1="0" x2={width} y1={yScale(tick)} y2={yScale(tick)} stroke="#cecece" />
	{/each}
</g>

<style lang="scss">
	g {
		color: red;
		text {
			font-size: 0.85rem;
		}
	}
</style>
