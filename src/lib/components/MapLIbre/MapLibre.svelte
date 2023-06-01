<script lang="ts">
	import { onMount } from 'svelte';
	import { Map, Marker } from 'maplibre-gl';

	let map: Map;

	onMount(() => {
		map = new Map({
			container: 'map',
			style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=oIsY8nki09fPnuSKG6Ia', // stylesheet location
			center: [10.757933, 59.911491], // starting position [lng, lat]
			zoom: 11 // starting zoom
		});

		const schibsted = new Marker().setLngLat([10.74367, 59.915119]).addTo(map);
	});
</script>

<div class="map-container">
	<div id="map" />
</div>

<style lang="scss">
	.map-container {
		position: relative;
		overflow: hidden;
		border-radius: 5px;

		#map {
			width: auto;
			height: 350px;
		}
	}
</style>
