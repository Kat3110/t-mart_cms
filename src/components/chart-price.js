import React from "react";
import "chart.js/auto";

// eslint-disable-next-line import/no-unresolved
import { Bar } from "react-chartjs-2";

const data = {
    labels: [
        "00시 ",
        "01시 ",
        "02시 ",
        "03시 ",
        "04시 ",
        "05시 ",
        "06시 ",
    ],
    datasets: [{
        data: [5, 8, 12, 8, 6, 7, 10],
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
                    return `${tooltipItems.formattedValue} 개`;
                },
                title: function () {
                    return "";
                },
            },
        },
    },
}

export default function ChartPrice() {
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