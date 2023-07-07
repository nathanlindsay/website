<script lang="ts">
	import AmountInput from "./AmountInput.svelte";
	import Payments from "./Payments.svelte";

	// Current balance
	let currentBalance = parseInt(localStorage.getItem("currentBalance")) || 0;
	$: localStorage.setItem("currentBalance", currentBalance?.toString() || "0");

	// Owed
	let owed = JSON.parse(localStorage.getItem("owed")) || [];
	$: localStorage.setItem("owed", JSON.stringify(owed));

	// Owe
	let owe = JSON.parse(localStorage.getItem("owe")) || [];
	$: localStorage.setItem("owe", JSON.stringify(owe));

	// Actual balance
	let actualBalance = currentBalance;

	$: {
		actualBalance = currentBalance;

		for (const payment of owed) {
			actualBalance += parseInt(payment.amount);
		}

		for (const payment of owe) {
			actualBalance -= parseInt(payment.amount);
		}
	}
</script>

<div class="p-6">
	<main class="container mx-auto space-y-6">
		<p
			class="text-center text-3xl font-medium"
			class:text-green-500={actualBalance > 0}
			class:text-red-500={actualBalance < 1}
		>
			£{actualBalance}
		</p>
		<AmountInput label="Current Balance" bind:value={currentBalance} />
		<Payments heading="Owed" bind:payments={owed} />
		<Payments heading="Owe" bind:payments={owe} />
	</main>
</div>
