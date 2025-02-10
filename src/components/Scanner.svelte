<script lang="ts">
	import {
		Html5QrcodeScanner,
		type QrcodeSuccessCallback,
		type QrcodeErrorCallback,
		Html5QrcodeScanType
	} from 'html5-qrcode';
	import { onMount } from 'svelte';

	const {
		onScanSuccess,
		onScanFail
	}: { onScanSuccess: QrcodeSuccessCallback; onScanFail: QrcodeErrorCallback } = $props();

	onMount(async () => {
		const scanner = new Html5QrcodeScanner(
			'reader',
			{
				fps: 10,
				aspectRatio: 1,
				rememberLastUsedCamera: true,
				supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
			},
			false
		);
		scanner.render((decodedText, result) => onScanSuccess(decodedText, result), onScanFail);
	});
</script>

<div id="reader"></div>

<style>
	#reader {
		flex: 1;
	}
</style>
