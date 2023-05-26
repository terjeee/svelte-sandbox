<script lang="ts">
	export let classColor: string = '';
</script>

<div class={classColor}>
	<slot />
</div>

<style lang="scss">
	div {
		display: inline-block;
		padding: 0.55rem 0.75rem;
		border-radius: 0.25rem;
		font-weight: bold;
		font-size: 13px;
		background-color: white;
		border: 1px #dbdbdb solid;

		&.red {
			background-color: #ff0505;
			color: white;
			font-weight: bold;
			border: none;
		}

		&.green {
			background-color: #12836c;
			color: white;
			font-weight: bold;
			border: none;
		}
	}
</style>
