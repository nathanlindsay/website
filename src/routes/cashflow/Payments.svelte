<script lang="ts">
	import { Check,Plus } from "lucide-svelte";

	import AmountInput from "./AmountInput.svelte";
	import Button from "./Button.svelte";
	import NameInput from "./NameInput.svelte";

	interface Payment {
		name: string;
		amount: number;
	}

	export let heading: string;
	export let payments: Payment[] = [];

	const addPayment = () => {
		payments = [...payments, { name: "", amount: 0 }];
	};

	const removePayment = (index: number) => {
		payments = payments.filter((_, i) => i !== index);
	};
</script>

<section class="w-full space-y-1">
	<header class="flex items-center justify-between">
		<h2 class="font-medium">
			{heading}
		</h2>

		<Button on:click={addPayment}>
			<Plus />
		</Button>
	</header>

	<ul class="space-y-1">
		{#each payments as payment, i}
			<li class="flex items-center gap-1">
				<NameInput bind:value={payment.name} />

				<AmountInput bind:value={payment.amount} />

				<Button on:click={() => removePayment(i)}>
					<Check />
				</Button>
			</li>
		{/each}
	</ul>
</section>
