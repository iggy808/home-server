<script lang="ts">
    import { chartRender } from "$lib/helpers/chart-helpers.js";
    let { data } = $props();
</script>

<div id="module-title-container">
    <h1 class="px-8 py-3 text-2xl">{ data.title }</h1>
    <hr class="w-[95%] mx-auto"/>
</div>

<div id="module-container" class="mx-10 my-4 grid grid-cols-2 grid-rows-3 gap-4">

    <div id="finances-chart-container" class="border min-h-[25vh] col-span-2 bg-section">
        <canvas id="finances-chart" use:chartRender={ data.financeChart } ></canvas>
    </div>

    <div id="expenses-snapshot-container" class="border bg-section">
        <div id="expenses-snapshot-title-container" class="flex justify-between">
            <h1 class="px-4 py-3 text-xl">Latest Expenses</h1>
            <div class="px-4 py-3">
                <button type="button" class="w-6 h-6 rounded-full bg-interactive flex items-center justify-center">
                    <span class="text-2xl">+</span>
                </button>
            </div>
        </div>
        <hr class="w-[95%] mx-auto"/>
        <div id="expenses-snapshot-list-container" class="mx-6 my-2 px-2 py-2">
            <table class="table-fixed w-full h-full border">
                <thead class="bg-table-header">
                    <tr>
                        <th class="text-left border p-1">Description</th>
                        <th class="text-left border p-1">Date</th>
                        <th class="text-left border p-1">Amount</th>
                    </tr>
                </thead>
                <tbody class="bg-table-body">
                    <tr>
                        <td class="text-left border p-1">Chipotle</td>
                        <td class="text-left border p-1">28-08-2025</td>
                        <td class="text-left border p-1">$17</td>
                    </tr>
                    <tr>
                        <td class="text-left border p-1">Chili's</td>
                        <td class="text-left border p-1">27-08-2025</td>
                        <td class="text-left border p-1">$40</td>
                    </tr>
                    <tr>
                        <td class="text-left border p-1">Taco Bell</td>
                        <td class="text-left border p-1">26-08-2025</td>
                        <td class="text-left border p-1">$10</td>
                    </tr>
                    <tr>
                        <td class="text-left border p-1">Whataburger</td>
                        <td class="text-left border p-1">25-08-2025</td>
                        <td class="text-left border p-1">$15</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div id="savings-snapshot-container" class="border bg-section">
        <div id="savings-snapshot-title-container" class="flex justify-between">
            <h1 class="px-4 py-3 text-xl">Latest Savings</h1>
            <div class="px-4 py-3">
                <button type="button" class="w-6 h-6 rounded-full bg-interactive flex items-center justify-center">
                    <span class="text-2xl">+</span>
                </button>
            </div>
        </div>
        <hr class="w-[95%] mx-auto"/>
        <div id="savings-snapshot-list-container" class="mx-6 my-2 px-2 py-2">
            <table class="table-fixed w-full h-full border">
                <thead class="bg-table-header">
                    <tr>
                        <th class="text-left border p-1">Description</th>
                        <th class="text-left border p-1">Date</th>
                        <th class="text-left border p-1">Amount</th>
                    </tr>
                </thead>
                <tbody class="bg-table-body">
                    <tr>
                        <td class="text-left border p-1">Scheduled Deposit</td>
                        <td class="text-left border p-1">28-08-2025</td>
                        <td class="text-left border p-1">$100</td>
                    </tr>
                    <tr>
                        <td class="text-left border p-1">Scheduled Deposit</td>
                        <td class="text-left border p-1">27-08-2025</td>
                        <td class="text-left border p-1">$100</td>
                    </tr>
                    <tr>
                        <td class="text-left border p-1">Scheduled Deposit</td>
                        <td class="text-left border p-1">26-08-2025</td>
                        <td class="text-left border p-1">$100</td>
                    </tr>
                    <tr>
                        <td class="text-left border p-1">Scheduled Deposit</td>
                        <td class="text-left border p-1">25-08-2025</td>
                        <td class="text-left border p-1">$100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    <div id="finances-table-container" class="border col-span-2 bg-section">
        <p>finances table</p>
    </div>
</div>