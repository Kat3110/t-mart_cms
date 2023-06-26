import React from "react";
import "chart.js/auto";

// eslint-disable-next-line import/no-unresolved
import { Bar } from "react-chartjs-2";

const data = {
    labels: [
        "1인 평균 거래 빈도",
    ],
    datasets: [{
        data: [4],
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

export default function ChartStatistics() {
    return (
        <>
            <Bar
                sx={{ height: '300px' }}
                options={options}
                data={data}
            />
        </>
    );
}