<script lang="ts">
	import Job from "./Job.svelte";
</script>

<svelte:head>
	<title>Nathan Lindsay</title>
	<meta
		name="description"
		content="A little bit about some of the work I've done."
	/>
</svelte:head>

<header class="mx-auto flex items-center gap-3">
	<img alt="Nathan Lindsay" class="h-16" src="/avataaars.svg" />

	<div>
		<h1 class="text-xl font-semibold">Hi, I'm Nathan</h1>
		<p>I'm a software engineer and technical contractor</p>
	</div>
</header>

<main>
	<section class="space-y-2">
		<h2 class="font-semibold">Work</h2>

		<ul class="space-y-3">
			<Job title="Software Engineer" when="January 2020 - Now">
				I build internal tools for small businesses to help them run more
				efficiently and with less room for human error.
			</Job>

			<Job title="Physical Security Engineer" when="March 2022 - Now">
				I help big customers install, provision and maintain physical digital
				security systems. I also write scripts to automate the boring stuff.
			</Job>

			<Job
				title="Consulting Technical Manager"
				where="Zero 7"
				when="January 2020 - February 2022"
			>
				I ran Zero 7's technical operations for a couple of years. I was in charge
				of everything from internal IT to customer operations.
			</Job>

			<Job
				title="Financial Crime Specialist"
				where="Monzo"
				when="January 2019 - December 2019"
			>
				I reviewed bank transactions and IDs for anything suspicious and wrote
				reports for UK law enforcement agencies.
			</Job>
		</ul>
	</section>
</main>
