<script lang="ts">
	import { type QrcodeSuccessCallback } from 'html5-qrcode';
	import { tableData } from './data.svelte';
	import Scanner from './Scanner.svelte';
	import TableContainer from './TableContainer.svelte';

	$inspect(tableData);

	function onScanSuccess(decodedText: string, result?: any) {
		console.log(`Scan result: ${decodedText}`, result);
		// console.log(tableData);
		// $inspect(decodedText);
		if (!tableData.rows.find((d) => d.code === decodedText)) {
			console.log('Adding...');
			tableData.rows = [...tableData.rows, { code: decodedText, set: tableData.currentSet }];
			// tableData.rows.push({ code: decodedText, set: 'foo' });
		} else {
			console.log('Already added');
		}
	}
	const onScanFail = () => {};
</script>

<svelte:head>
	<title>Bulk Pokemon TCG Code Card Scanner</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="max-h-[350px] w-full flex-1 content-center overflow-hidden p-4 md:max-h-[100%]">
	<Scanner {onScanSuccess} {onScanFail} />
</section>
<section class="mt-4 flex-1 overflow-auto p-4">
	<TableContainer />
</section>

<style>
	section {
		flex: 1;
	}

	section:nth-child(2) {
		overflow-y: auto;
	}
</style>
