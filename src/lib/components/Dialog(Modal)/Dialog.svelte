<script lang="ts">
	import { afterUpdate } from 'svelte';

	let dialog: HTMLDialogElement;

	afterUpdate(() => {
		dialog = document.querySelector('#dialog')!;

		dialog.addEventListener('click', (event) => {
			var rect = dialog.getBoundingClientRect();
			var isInDialog =
				rect.top <= event.clientY &&
				event.clientY <= rect.top + rect.height &&
				rect.left <= event.clientX &&
				event.clientX <= rect.left + rect.width;
			if (!isInDialog) {
				dialog.close();
			}
		});
	});
</script>

<section>
	<dialog id="dialog">
		<div class="header">
			<h1>Dialog/Modal</h1>
			<button on:click={() => dialog.close()}>❌</button>
		</div>
		<p />
	</dialog>

	<button on:click={() => dialog.showModal()} class="btn-toggle">{`<Dialog />`}</button>
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;

		.btn-toggle {
			padding: 0.8rem 1rem;
			border-radius: 5px;
			font-weight: bold;
			letter-spacing: 0.5px;
			color: white;
			border: transparent;
			cursor: pointer;
			background: rgba(36, 160, 237, 1);

			&:hover {
				background-color: rgba(36, 160, 237, 0.85);
			}
		}

		dialog {
			padding: 1rem;
			inset: 0;
			margin: auto;
			border: none;
			border-radius: 5px;
			outline: 1px solid lightgrey;

			.header {
				display: flex;
				gap: 4rem;
				border-bottom: 1px solid lightgrey;
				padding-bottom: 0.5rem;
				margin-bottom: 0.5rem;

				h1 {
					font-size: 1.25rem;
				}

				button {
					border: none;
					outline: transparent;
					background-color: white;
					cursor: pointer;
					transition: all 0.125s;

					&:hover {
						transform: scale(1.15);
					}
				}
			}

			p {
				padding: 1.5rem 0;
			}

			&::backdrop {
				background: rgba(0, 0, 0, 0);
				backdrop-filter: blur(2.5px);
			}
		}
	}
</style>
