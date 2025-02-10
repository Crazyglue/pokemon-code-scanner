<script lang="ts" module>
	// Define the Option type
	export type Option = {
		label: string;
		value: string;
		group: string;
	};

	export type DropdownSelectProps = {
		options: Option[];
		selected: string;
	};
</script>

<script lang="ts">
	// Options are passed in via props.
	let { options, selected = $bindable() }: DropdownSelectProps = $props();
</script>

<select
	bind:value={selected}
	class="w-50 truncate rounded border border-gray-300 px-4 py-2 text-left"
>
	{#each options as option}
		<option value={option.value}>
			{option.label}
		</option>
	{/each}
</select>
