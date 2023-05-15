<script lang="ts">
	import cat1 from '../images/cat1.jpg';
	import cat2 from '../images/cat2.jpg';
	import cat3 from '../images/cat3.jpg';
	import cat4 from '../images/cat4.jpg';
	import NotaBene from './lego/NotaBene.svelte';

	const innstilling = [
		[{ navn: 'Jonas', stilling: 'Partileder', innstilt: true, status: 'Fortsette' }],
		[
			{ navn: 'Bjørnar', stilling: 'Nestleder', innstilt: false },
			{ navn: 'Jan', stilling: 'Nestleder', innstilt: true, status: 'Ny' },
			{ navn: 'Tonje', stilling: 'Nestleder', innstilt: true, status: 'Ny' }
		],
		[
			{ navn: 'Anette', stilling: 'Kvinnepolitisk talsperson', innstilt: true, status: 'Fortsette' },
			{ navn: 'Cecilie', stilling: 'Sentralstyremedlem, Troms', innstilt: true, status: 'Fortsette' },
			{ navn: 'Marte', stilling: 'Sentralstyremedlem, Vestland', innstilt: true, status: 'Fortsette' },
			{ navn: 'Ahmed', stilling: 'Sentralstyremedlem, Agder', innstilt: true, status: 'Ny' },
			{ navn: 'Katri', stilling: 'Sentralstyremedlem, Rogaland', innstilt: true, status: 'Ny' },
			{ navn: 'Peggy', stilling: 'Sentralstyremedlem, LO', innstilt: true, status: 'Fortsette' }
		]
	];

	function toggleShow() {}
</script>

<div class="container">
	{#each innstilling as divisjon}
		<ul>
			{#each divisjon as politiker}
				<li>
					<div>
						<img src={cat4} alt="politiker" />
					</div>
					<h3>{politiker.navn}</h3>
					<p>{politiker.stilling}</p>
					<div>
						{#if !politiker.innstilt}
							<NotaBene classColor="red">UTE</NotaBene>
						{:else if politiker.status === 'Ny'}
							<NotaBene classColor="green">INNSTILT: Ny</NotaBene>
						{:else}
							<NotaBene>INNSTILT: Fortsette</NotaBene>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	{/each}
	<button on:click={toggleShow}>Vis mer</button>
</div>

<style lang="scss">
	.container {
		position: relative;
		height: 50%;
		max-width: 600px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		ul {
			display: flex;
			flex-wrap: wrap;
			gap: 1.5rem;

			li {
				min-width: 135px;
				max-width: 145px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				img {
					margin-bottom: 0.5rem;
					display: block;
					height: 100px;
					width: 100px;
					border-radius: 50%;
				}

				h3 {
					font-size: 1rem;
				}

				p {
					margin-top: 0.2rem;
					margin-bottom: 0.5rem;
					font-size: 0.85rem;
					font-weight: 400;
					font-style: italic;
					color: gray;
					letter-spacing: -1px;
					word-wrap: break-word;
					font-family: monospace;
				}
			}
		}

		button {
			position: sticky;
			margin: 0.5rem auto;
			padding: 0.5rem 1rem;
			bottom: 0.5rem;
			font-size: 0.75rem;
			font-weight: bold;
			background-color: #e9e9e9;
			border-radius: 2rem;
			border: none;
			cursor: pointer;

			&:hover {
				background-color: #d9d9d9;
			}
		}
	}
</style>
