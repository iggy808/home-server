import type { ChartConfiguration } from 'chart.js';
import type { PageServerLoad } from './$types';
import { readLedgerItems } from '$lib/server/modules/finances/readLedgerItems';

export const load: PageServerLoad = async () => {
    let ledgerTableData = await readLedgerItems();

    let financeChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }],
    };

    let financeChart : ChartConfiguration = {
        type: 'line',
        data: financeChartData,
        options: {
            maintainAspectRatio: false
        }
    };
    
    return {
        title: "Finances",
        financeChart: financeChart,
        ledgerTableData: ledgerTableData
    };
};