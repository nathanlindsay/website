<script lang="ts">
	import Amount from "./Amount.svelte";
	import Payments from "./Payments.svelte";
	import type { Payment } from "./types";

	let currentBalance = parseInt(localStorage.getItem("currentBalance") || "0");
	let owed = JSON.parse(localStorage.getItem("owed") || "[]") as Payment[];
	let owe = JSON.parse(localStorage.getItem("owe") || "[]") as Payment[];

	$: actualBalance =
		currentBalance +
		owed.reduce((acc, payment) => acc + payment.amount, 0) -
		owe.reduce((acc, payment) => acc + payment.amount, 0);

	$: {
		localStorage.setItem("currentBalance", currentBalance?.toString() || "0");
		localStorage.setItem("owed", JSON.stringify(owed));
		localStorage.setItem("owe", JSON.stringify(owe));
	}
</script>

<svelte:head>
	<title>Cashflow</title>
</svelte:head>

<p
	class="text-center text-3xl font-medium"
	class:text-green-500={actualBalance > 0}
	class:text-red-500={actualBalance < 1}
>
	£{actualBalance}
</p>

<Amount label="Current Balance" bind:value={currentBalance} />

<Payments heading="Owed" bind:payments={owed} />

<Payments heading="Owe" bind:payments={owe} />
