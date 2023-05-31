<script lang="ts">
	import { browser } from '$app/environment';
	import { VisXYContainer, VisLine, VisAxis } from '@unovis/svelte';

	const data = [
		{ x: 0, y: 0 },
		{ x: 1, y: 2 },
		{ x: 2, y: 1 },
		{ x: 3, y: 3 },
		{ x: 4, y: 2 },
		{ x: 5, y: 4 }
	];
</script>

{#if browser}
	<VisXYContainer {data} height={450}>
		<VisLine {data} x={(d) => d.x} y={(d) => d.y} />
		<VisAxis type="x" />
		<VisAxis type="y" />
	</VisXYContainer>
{/if}
