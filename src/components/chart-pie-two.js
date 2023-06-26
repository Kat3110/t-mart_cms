import React from "react";
import "chart.js/auto";
// eslint-disable-next-line import/no-unresolved
import { Pie } from "react-chartjs-2";

const data = {
    labels: [
        "재구매",
        "재구매 하지 않음",
    ],
    datasets: [{
        data: [100, 20],
        backgroundColor: ['rgba(80, 72, 229, 0.4)', 'rgba(252,212,26,0.73)'],
        borderColor: 'rgb(101, 66, 255)',
        borderWidth: 1
    }]
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
        },
        datalabels: {
            display: true,
        },
        tooltip: {
            displayColors: false,
            bodyFont: {
                size: 12,
            },
            callbacks: {
                label(tooltipItems) {
                    return `${tooltipItems.formattedValue} 원`;
                },
                title: function () {
                    return "";
                },
            },
        },
    },
}

export default function ChartPieTwo() {
    return (
        <>
            <Pie
                sx={{ height: '300px' }}
                options={options}
                data={data}
            />
        </>
    );
}