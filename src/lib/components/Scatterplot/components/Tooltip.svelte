<script lang="ts">
	import type { Student, xyScale } from '../types/types';

	export let data: Student;
	export let xScale: xyScale;
	export let yScale: xyScale;

	$: console.log(xScale(data.grade));
</script>

<div class="tooltip" style="top: {yScale(data.hours) - 40}px; left: {xScale(data.grade) - 10}px">
	<h1>{data.name}</h1>
	<p>{data.hours}h, {data.grade}%</p>
</div>

<style lang="scss">
	.tooltip {
		position: absolute;
		padding: 0.25rem 0.35rem;
		background-color: white;
		border: 1px solid black;
		border-radius: 0.2rem;
		font-size: 0.85rem;
		pointer-events: none;
		transition: top 0.1s ease-in-out, left 0.1s ease-in-out;

		h1 {
			font-size: 0.85rem;
			margin-bottom: 0.1rem;
			font-weight: bold;
		}
	}
</style>
