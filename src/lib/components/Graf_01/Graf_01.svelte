<script lang="ts">
	import * as d3 from 'd3';
	import { DUMMY_DATA } from './data';
	import AxisX from './components/AxisX.svelte';
	import AxisY from './components/AxisY.svelte';

	const width = 250;
	const height = 250;

	const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
	const yScale = d3
		.scaleLinear()
		.domain([0, d3.max(DUMMY_DATA, (data) => data.hours) as number])
		.range([height, 0]);
</script>

<section>
	<svg {width} {height}>
		<AxisX {height} {xScale} xTicks={[0, 25, 50, 75, 100]} />
		<AxisY {yScale} yTicks={[0, 20, 40, 60]} />
		{#each DUMMY_DATA as student}<circle
				cx={xScale(student.grade)}
				cy={yScale(student.hours)}
				r="10"
				fill="purple"
				stroke="black"
			/>{/each}
	</svg>
</section>

<style lang="scss">
	section {
		padding: 4rem 0;
		border-bottom: 0.5px solid black;

		// svg {
		// 	width: 100%;
		// 	height: 250px;
		// }
	}
</style>
