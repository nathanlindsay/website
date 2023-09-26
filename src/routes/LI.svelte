<script lang="ts">
	export let jobTitle: string;
	export let where: string | undefined = undefined;
	export let when: string;
</script>

<li
	class="block space-y-2 overflow-hidden rounded-lg border bg-white p-6 shadow-lg transition duration-300 hover:-translate-x-1 hover:-translate-y-1 print:shadow-none"
>
	<div>
		<h5 class="font-medium">{jobTitle}</h5>

		{#if where}
			<p>{where}</p>
		{/if}

		<p class="text-sm">{when}</p>
	</div>

	<p>
		<slot />
	</p>
</li>
