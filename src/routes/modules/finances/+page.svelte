<script lang="ts">
    import { chartRender } from "$lib/client/helpers/chart-helpers.js";
    let { data } = $props();
    console.log(data.ledgerTableData);
</script>

<div id="module-title-container">
    <h1 class="px-8 py-3 text-2xl">{ data.title }</h1>
    <hr class="w-[95%] mx-auto"/>
</div>

<div id="module-container" class="mx-10 my-4 grid grid-cols-2 grid-rows-3 gap-4">

    <div id="finances-chart-container" class="border min-h-[29vh] col-span-2 bg-section">
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
        <div id="expenses-snapshot-table-container" class="mx-6 my-2 px-2 py-2">
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
                    <tr>
                        <td class="text-left border p-1">Wing Stop</td>
                        <td class="text-left border p-1">24-08-2025</td>
                        <td class="text-left border p-1">$10,000</td>
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
        <div id="savings-snapshot-table-container" class="mx-6 my-2 px-2 py-2">
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
                    <tr>
                        <td class="text-left border p-1">Scheduled Deposit</td>
                        <td class="text-left border p-1">25-08-2025</td>
                        <td class="text-left border p-1">$100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    <div id="finances-ledger-container" class="border col-span-2 bg-section">
        <div id="finances-ledger-title-container">
            <h1 class="px-8 py-3 text-xl">Ledger</h1>
        </div>
        <hr class="w-[95%] mx-auto"/>
        <div id="finances-ledger-table-container" class="mx-12 mt-4">
            <table class="table-fixed w-full h-full border">
                <thead class="bg-table-header">
                    <tr>
                        <th class="text-left border p-1">Date</th>
                        <th class="text-left border p-1">Type</th>
                        <th class="text-left border p-1">Description</th>
                        <th class="text-left border p-1">Amount</th>
                        <th class="text-left border p-1">Actions</th>
                    </tr>
                </thead>
                <tbody class="bg-table-body">
                    {#each data.ledgerTableData as ledgerItem}
                    <tr>
                        <td class="text-left border p-1">{ ledgerItem.createdAt }</td>
                        <td class="text-left border p-1">{ ledgerItem.ledgerTypeName }</td>
                        <td class="text-left border p-1">{ ledgerItem.description }</td>
                        <td class="text-left border p-1">{ ledgerItem.amount }</td>
                        <td class="border p-1">
                            <div class="grid grid-cols-2 grid-rows-1">
                                <button type="button" class="bg-interactive mx-8 rounded-xl">
                                    <span class="text-m">Edit</span>
                                </button>
                                <button type="button" class="bg-interactive mx-8 rounded-xl">
                                    <span class="text-m">Delete</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
        <div id="finances-ledger-table-footer" class="mx-12 mb-1">
            <div id="finances-ledger-table-pagination-container" class="w-1/4 mt-2">
                <div class="grid grid-cols-6 grid-rows-1">
                    <div>
                        <p>Page:</p>
                    </div>
                    <div class="justify-self-center">
                        <button type="button" class="bg-interactive w-6 h-6 rounded-full">
                            <span class="text-m">1</span>
                        </button>
                    </div>
                    <div class="justify-self-center">
                        <button type="button" class="bg-interactive w-6 h-6 rounded-full">
                            <span class="text-m">2</span>
                        </button>
                    </div>
                    <div class="justify-self-center">
                        <button type="button" class="bg-interactive w-6 h-6 rounded-full">
                            <span class="text-m">3</span>
                        </button>
                    </div>
                    <div class="justify-self-center">
                        <button type="button" class="bg-interactive w-6 h-6 rounded-full">
                            <span class="text-m">...</span>
                        </button>
                    </div>
                    <div class="justify-self-center">
                        <button type="button" class="bg-interactive w-6 h-6 rounded-full">
                            <span class="text-m">9</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>