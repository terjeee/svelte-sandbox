<script lang="ts">
	import IconSvelte from '../lib/images/svelte-logo.svg';
	import './styles.scss';
</script>

<div class="app">
	<nav><img src={IconSvelte} alt="Svelte Logo" /></nav>
	<div>
		<aside>
			<ul>
				<li>Aftenposten</li>
				<li>Graf</li>
			</ul>
		</aside>
		<slot />
	</div>
	<footer>:)</footer>
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		padding: 0 1rem;
		margin: 0 auto;
		max-width: 960px;
		min-height: 100vh;

		nav {
			padding: 1rem 0;
			margin-bottom: 4rem;
			display: flex;
			justify-content: center;

			img {
				max-height: 60px;
			}
		}

		div {
			display: flex;
			gap: 4rem;
			aside {
				ul {
					li {
					}
				}
			}
		}

		footer {
			margin-top: auto;
			padding: 2rem 0;
			display: flex;
			justify-content: center;
			border-top: 1px black solid;
		}
	}
</style>
