import { Chart, type ChartConfiguration } from 'chart.js/auto';

export const chartRender = (node : HTMLCanvasElement, options : ChartConfiguration) => {
    new Chart(node, options);
}