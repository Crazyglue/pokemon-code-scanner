<script lang="ts">
	import DropdownSelect, { type Option } from '../components/DropdownSelect.svelte';
	import { tableData } from './data.svelte';
	import { rawData } from '../data/set-data';
	import { TableHandler, Datatable, ThSort, ThFilter } from '@vincjo/datatables';

	$inspect(tableData);

	const options: Option[] = rawData
		.reverse()
		.map((set): Option => ({ label: set.name, value: set.id, group: set.series }));

	let rows = $derived(tableData.rows);

	const table = new TableHandler(tableData.rows, { rowsPerPage: 20 });
	const csv = table.createCSV();
	const isDownloadDisabled = $derived(Object.values(rows).length < 1);

	$effect(() => {
		rows;
		update();
	});

	const update = () => {
		table.setRows(rows);
	};
</script>

<div
	class="max-y-md max-w mx-auto flex h-full flex-1 flex-col overflow-hidden rounded-xl bg-white p-4 shadow-md md:max-w-2xl"
>
	<div class="my-4 flex justify-between gap-2">
		<DropdownSelect {options} bind:selected={tableData.currentSet} />
		<button
			class="inline-flex items-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			disabled={isDownloadDisabled}
			onclick={() => csv.download('codes.csv')}
		>
			<svg class="mr-2 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
				><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg
			>
			<span>Download <span class="hidden md:inline">CSV</span></span>
		</button>
	</div>
	<div class="flex flex-1 flex-col overflow-y-auto">
		<Datatable {table}>
			<table>
				<thead>
					<tr>
						<ThSort {table} field="code">Code</ThSort>
						<ThSort {table} field="set">Set Name</ThSort>
					</tr>
					<!-- <tr>
						<ThFilter {table} field="code" />
						<ThFilter {table} field="set" />
					</tr> -->
				</thead>
				<tbody>
					{#each table.rows as row}
						<tr>
							<td>{row.code}</td>
							<td>{row.set}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</Datatable>
	</div>
</div>
