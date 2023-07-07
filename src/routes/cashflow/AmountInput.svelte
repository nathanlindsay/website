<script lang="ts">
	import { PoundSterling } from "lucide-svelte";

	export let label: string | undefined = undefined;
	export let value = 0;

	const id = crypto.randomUUID();
</script>

<div class="w-full space-y-1">
	{#if label}
		<label for={id} class="font-medium">{label}</label>
	{/if}

	<div
		class="flex items-center overflow-hidden rounded-xl bg-white pl-3 text-black"
	>
		<PoundSterling />

		<input type="number" placeholder="10" bind:value class="w-full p-3" />
	</div>
</div>
