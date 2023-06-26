import React from "react";
import "chart.js/auto";
// eslint-disable-next-line import/no-unresolved
import { Pie } from "react-chartjs-2";

const data = {
    labels: [
        "미성사",
        "성사",
    ],
    datasets: [{
        data: [150, 50],
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
                size: 13,
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

export default function ChartPie() {
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