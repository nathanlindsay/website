<script lang="ts">
	export let title: string;
	export let where: string | undefined = undefined;
	export let when: string;
</script>

<li
	class="block space-y-2 overflow-hidden rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-950/10 transition duration-300 print:shadow-none"
>
	<div>
		<h5 class="font-medium">{title}</h5>

		{#if where}
			<p>{where}</p>
		{/if}

		<p class="text-sm">{when}</p>
	</div>

	<p>
		<slot />
	</p>
</li>
