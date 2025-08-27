<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css"

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Static layout -->
 <div id="primary-container" class="flex h-screen">
	<div class="w-1/6 bg-sidebar">
		<aside class="h-screen">
			<div class="h-1/20">
				<h1 class="pl-4 pt-3 pb-3 text-2xl text-white"><a href="/">srvr</a></h1>
			</div>
			<hr class="bg-white h-px border-0" />
			<div class="h-[95%]">
				<ul class="list-disc pl-4">
					<li class="text-white my-2"><a href="/modules/finances">Finances</a></li>
					<li class="text-white my-2"><a href="/modules/health">Health</a></li>
				</ul>
			</div>
		</aside>
	</div>

	<!-- Dynamic page content -->
	<main class="flex-1 h-screen bg-main">
		{@render children?.()}
	</main>
 </div>