import React from "react";
import "chart.js/auto";

// eslint-disable-next-line import/no-unresolved
import { Bar } from "react-chartjs-2";

const data = {
    labels: [
        "수원 ",
        "용인 ",
        "고양",
        "창원 ",
        "성남",
        "화성",
    ],
    datasets: [{
        data: [1500000, 12500000, 8500000, 8000000, 7250000, 1750000],
        backgroundColor: 'rgba(80, 72, 229, 0.4)',
        borderColor: 'rgb(101, 66, 255)',
        borderWidth: 1
    }]
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
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

export default function ChartRegion() {
    return (
        <>
            <Bar
                sx={{ height: '500px' }}
                options={options}
                data={data}
            />
        </>
    );
}