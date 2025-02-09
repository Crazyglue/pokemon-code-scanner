<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex h-screen flex-col">
	<Header />

	<main class="flex flex-1 flex-col overflow-hidden md:flex-row">
		{@render children()}
	</main>

	<footer>
		<a href="https://www.buymeacoffee.com/rockergaming" target="_blank"
			><img
				src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
				alt="Buy Me A Coffee"
				style="height: 60px !important;width: 217px !important;"
			/></a
		>
	</footer>
</div>

<style>
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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
