<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css"

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Static layout -->
 <div id="primary-container" class="flex min-h-screen">
	<aside class="sticky top-0 w-1/6 h-screen bg-sidebar">
		<div>
			<h1 class="pl-4 pt-3 pb-3 text-2xl text-white"><a href="/">srvr</a></h1>
		</div>
		<hr class="bg-white h-px border-0" />
		<div>
			<ul class="list-disc pl-4">
				<li class="text-white my-2"><a href="/modules/finances">Finances</a></li>
				<li class="text-white my-2"><a href="/modules/health">Health</a></li>
			</ul>
		</div>
	</aside>

	<!-- Dynamic page content -->
	<main class="flex-1 bg-main">
		{@render children?.()}
	</main>
 </div>