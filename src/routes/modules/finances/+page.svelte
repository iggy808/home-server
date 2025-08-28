<script lang="ts">
    import { chartRender } from "$lib/helpers/chart-helpers.js";
    let { data } = $props();
</script>

<div id="module-title-container">
    <h1 class="px-8 py-3 text-2xl">{ data.title }</h1>
</div>
<hr class="w-[95%] mx-auto"/>
<div id="module-container" class="mx-10 my-4 grid grid-cols-2 grid-rows-3 gap-4">
    <div id="finances-chart-container" class="border col-span-2">
        <canvas id="finances-chart" use:chartRender={ data.financeChart } ></canvas>
    </div>
    <div id="expenses-snapshot-container" class="border">
        <p>expenses snapshot</p>
    </div>
    <div id="savings-snapshot-container" class="border">
        <p>savings snapshot</p>
    </div>
    <div id="finances-table-container" class="border col-span-2">
        <p>finances table</p>
    </div>
</div>