<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex h-screen flex-col">
	<Header />

	<main class="flex flex-1 flex-row overflow-hidden">
		{@render children()}
	</main>

	<footer>
		<p>Buy me a coffee: TODO</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		/* display: flex;
		flex-direction: column;
		padding: 1rem; */
		width: 100%;
		/* max-width: 64rem; */
		margin: 0 auto;
		box-sizing: border-box;
	}

	/* The main container takes the remaining space */
	.stack-container {
		padding: 4px;
		flex: 1; /* expand to fill available space */
		display: flex;
		flex-direction: column;
	}

	.split-container {
		flex: 1; /* Fills the space between header and footer */
		display: flex;
		flex-direction: row; /* Arrange children side by side */
		overflow: hidden; /* Prevent any unwanted overflow */
	}

	.split-container > section {
		flex: 1;
		overflow: auto; /* Allows inner scrolling if content overflows */
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
