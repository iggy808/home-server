import { Chart, type ChartConfiguration } from 'chart.js/auto';

export const chartRender = (node : HTMLCanvasElement, options : ChartConfiguration) => {
    console.log("chart render called");
    console.log(node);
    console.log(options);
    new Chart(node, options);
}