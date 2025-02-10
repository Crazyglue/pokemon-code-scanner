<script lang="ts">
	import { tableData } from './data.svelte';
	import Scanner from '../components/Scanner.svelte';
	import TableContainer from '../components/TableContainer.svelte';
	import { idToNameMap } from '../data/set-data';

	$inspect(tableData);

	const audio = new Audio('/notification.wav');

	function playAddedSound() {
		audio.currentTime = 0;
		audio.volume = 0.5;
		audio.play().catch((err) => {
			console.error('Playback failed: ', err);
		});
	}

	function onScanSuccess(decodedText: string, result?: any) {
		if (!tableData.rows.find((d) => d.code === decodedText)) {
			const setName = idToNameMap.get(tableData.currentSet);
			if (!setName) {
				throw new Error('Invalid set name, this should not happen.');
			}
			tableData.rows = [...tableData.rows, { code: decodedText, set: setName }];
			playAddedSound();
		} else {
			console.log('Already added');
		}
	}
	const onScanFail = () => {};
</script>

<svelte:head>
	<title>Bulk Pokemon TCG Code Card Digitizer</title>
	<meta
		name="description"
		content="Digitize your PTCG Live codes efficiently. Export them to CSV to be sold or shared."
	/>
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
