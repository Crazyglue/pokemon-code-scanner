<script lang="ts" module>
	// Define the Option type
	export type Option = {
		label: string;
		value: string;
		group: string;
	};

	export type DropdownSelectProps = {
		options: Option[];
		currentSet: string;
	};
</script>

<script lang="ts">
	import { idToNameMap } from '../data/set-data';

	// Options are passed in via props.
	let { options, currentSet: selected = $bindable() }: DropdownSelectProps = $props();

	// Component state
	let open: boolean = $state(false);
	// let selected: string | null = $state(null);
	let search: string = $state('');

	// Filter options based on the search input.
	const filteredOptions = $derived(
		search
			? options.filter((option: Option) =>
					option.label.toLowerCase().includes(search.toLowerCase())
				)
			: options
	);

	// Select an option, update state, and close the dropdown.
	function select(option: Option): void {
		selected = idToNameMap.get(option.value) ?? selected;
		open = false;
		search = '';
	}

	// A custom action to detect clicks outside the component.
	function clickOutside(node: HTMLElement) {
		const handleClick = (event: MouseEvent) => {
			if (!node.contains(event.target as Node)) {
				node.dispatchEvent(new CustomEvent('outclick'));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}
</script>

<div class="relative w-64" use:clickOutside on:outclick={() => (open = false)}>
	<!-- Dropdown Button -->
	<button
		on:click={() => (open = !open)}
		class="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-left shadow-sm focus:outline-none"
	>
		<span>{selected ? selected : 'Select an option'}</span>
		<span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
			<svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
				<path
					d="M7 7l3-3 3 3m0 6l-3 3-3-3"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</span>
	</button>

	<!-- Dropdown Panel -->
	{#if open}
		<div class="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
			<!-- Search Input -->
			<input
				type="text"
				bind:value={search}
				placeholder="Search..."
				class="w-full rounded-t-md border-b border-gray-300 px-3 py-2 focus:outline-none"
			/>
			<!-- Options List -->
			<ul class="max-h-60 overflow-auto">
				{#each filteredOptions as option, i (option.value)}
					{#if option.group && (i === 0 || filteredOptions[i - 1].group !== option.group)}
						<div class="bg-gray-100 px-4 py-1 text-xs text-gray-500 uppercase">
							{option.group}
						</div>
					{/if}
					<li
						on:click={() => select(option)}
						class="cursor-pointer px-4 py-2 hover:bg-blue-500 hover:text-white"
					>
						{option.label}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
