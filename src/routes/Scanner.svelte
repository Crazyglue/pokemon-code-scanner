<script lang="ts">
	import {
		Html5QrcodeScanner,
		type QrcodeSuccessCallback,
		type QrcodeErrorCallback
	} from 'html5-qrcode';
	import { onMount } from 'svelte';

	const {
		onScanSuccess,
		onScanFail
	}: { onScanSuccess: QrcodeSuccessCallback; onScanFail: QrcodeErrorCallback } = $props();

	onMount(async () => {
		const scanner = new Html5QrcodeScanner('reader', { fps: 10, aspectRatio: 1 }, false);
		scanner.render((decodedText, result) => onScanSuccess(decodedText, result), onScanFail);
	});
</script>

<div id="reader"></div>

<style>
	#reader {
		flex: 1; /* Allow it to grow/shrink within its container */
		/* width: 100%;
		position: relative; */
		/* height: 50%; Ensure it fills the parent's height */
	}
</style>
