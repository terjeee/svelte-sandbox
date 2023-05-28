<script lang="ts">
	import IconSvelte from '../lib/images/svelte-logo.svg';
	import './styles.scss';

	function scrollToView(event: any) {
		const targetEl = event.target.getAttribute('href');
		const el = document.querySelector(targetEl);
		console.log(el, targetEl);
		if (!el) return;
		el.scrollIntoView({
			behaviour: 'smooth'
		});
	}
</script>

<div class="app">
	<nav><img src={IconSvelte} alt="Svelte Logo" /></nav>
	<div>
		<!-- <aside>
			<ul>
				<a href="#aftenposten" on:click|preventDefault={scrollToView}>Aftenposten</a>
				<a href="#graf-01" on:click|preventDefault={scrollToView}>Graf</a>
			</ul>
		</aside> -->
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

		// div {
		// 	display: flex;
		// 	gap: 4rem;

		// 	aside {
		// 		display: none;
		// 	}

		// 	@media (min-width: 800px) {
		// 		aside {
		// 			display: block;
		// 			margin-right: 0.5rem;
		// 			overflow-y: scroll;
		// 			ul {
		// 				height: 100%;
		// 				display: flex;
		// 				flex-direction: column;
		// 				gap: 0.5rem;
		// 			}
		// 		}
		// 	}
		// }

		footer {
			margin-top: auto;
			padding: 5rem 0 2rem 0;
			display: flex;
			justify-content: center;
		}
	}
</style>
