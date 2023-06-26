import React from "react";
import "chart.js/auto";

// eslint-disable-next-line import/no-unresolved
import { Bar } from "react-chartjs-2";

const data = {
    labels: [
        "22년10월 1주차",
        "22년10월 2주차",
        "22년10월 3주차",
        "22년10월 4주차",
        "22년10월 5주차",
        "22년10월 6주차",
        "22년10월 7주차"
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [1500000, 9500000, 15500000, 22500000, 9250000, 1750000, 4750000],
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

export default function Chart() {
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