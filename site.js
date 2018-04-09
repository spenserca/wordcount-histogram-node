'use strict';

const wordcounter = require('index.js');

module.exports = () => {
    var ctx = document.getElementById("chart");
    const topTen = wordcounter();
    const words = topTen.reduce(w => {
        return w.key;
    });

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: words,
            datasets: [{
                label: '# of Words',
                data: topTen.reduce(w => { return w.value }),
                backgroundColor: [
                    'white'
                ],
                borderColor: [
                    'black'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}