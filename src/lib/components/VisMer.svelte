<script lang="ts">
	import cat1 from '../images/cat1.jpg';
	import cat2 from '../images/cat2.jpg';
	import cat3 from '../images/cat3.jpg';
	import cat4 from '../images/cat4.jpg';
	import AP_Merkalapp from './lego/AP_Merkalapp.svelte';

	let visMer = false;

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

	let toggleShow = () => (visMer = !visMer);
</script>

<section>
	<div class="container" class:shrink={!visMer} style={!visMer ? 'overflow:hidden' : ''}>
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
								<AP_Merkalapp classColor="red">UTE</AP_Merkalapp>
							{:else if politiker.status === 'Ny'}
								<AP_Merkalapp classColor="green">INNSTILT: Ny</AP_Merkalapp>
							{:else}
								<AP_Merkalapp>INNSTILT: Fortsette</AP_Merkalapp>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		{/each}
		<button on:click={toggleShow}>{!visMer ? 'Vis mer' : 'Vis mindre'}</button>
		{#if !visMer}
			<div class="fade" />
		{/if}
	</div>
	<h2>To mangemillionærer</h2>
	<p>
		Med Støre og Vestre i ledelsen får Arbeiderpartiet både en leder og en nestleder som en har en formue på flere titalls
		millioner kroner.
	</p>
</section>

<style lang="scss">
	section {
		max-width: 600px;
		margin: 0 auto;

		.container {
			position: relative;
			max-height: 1250px;
			display: flex;
			flex-direction: column;
			gap: 2rem;
			transition: max-height 0.2s ease-in-out;

			&.shrink {
				max-height: 470px;
			}

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
				z-index: 100;
				position: sticky;
				margin: 0.5rem auto;
				padding: 0.7rem 1rem;
				bottom: 0;
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

			.fade {
				position: absolute;
				height: 35%;
				width: 100%;
				bottom: 0;
				left: 0;
				background: linear-gradient(rgba(0, 0, 0, 0) 10%, white);
			}
		}

		h2 {
			margin-top: 2.5rem;
			margin-bottom: 0.5rem;
		}
	}
</style>
