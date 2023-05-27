<script lang="ts">
	import type { Student } from './types/types';

	import * as d3 from 'd3';
	import { DUMMY_DATA } from './data';
	import AxisX from './components/AxisX.svelte';
	import AxisY from './components/AxisY.svelte';
	import Tooltip from './components/Tooltip.svelte';

	const margin = {
		top: 20,
		right: 40,
		bottom: 20,
		left: 20
	};

	let width = 250;
	const height = 400;

	$: xScale = d3
		.scaleLinear()
		.domain([0, 100])
		.range([0, width - margin.right - margin.left]);
	const yScale = d3
		.scaleLinear()
		.domain([0, d3.max(DUMMY_DATA, (data) => data.hours) as number])
		.range([height - margin.top - margin.bottom, 0]);

	let hoveredData: Student | null = null;
	$: console.log(hoveredData);
</script>

<div class="graph" bind:clientWidth={width} on:mouseleave={() => (hoveredData = null)}>
	<svg {width} {height}>
		<AxisX {margin} {height} {xScale} xTicks={[0, 25, 50, 75, 100]} />
		<AxisY {margin} {width} {yScale} yTicks={[0, 10, 20, 30, 40, 50, 60]} />
		<g transform="translate({margin.top} {margin.left})">
			{#each DUMMY_DATA as student}
				<circle
					cx={xScale(student.grade)}
					cy={yScale(student.hours)}
					r={hoveredData && hoveredData === student ? 8 : 6}
					fill="red"
					stroke="black"
					opacity={hoveredData ? (hoveredData === student ? 1 : 0.5) : 1}
					on:mouseover={() => (hoveredData = student)}
					on:focus
				/>{/each}
		</g>
	</svg>
	{#if hoveredData}
		<Tooltip data={hoveredData} {xScale} {yScale} />
	{/if}
</div>

<style lang="scss">
	.graph {
		position: relative;
	}
</style>
