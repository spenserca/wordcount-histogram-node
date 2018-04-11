'use strict';

const wordcounter = require('index.js');
const Plotly = require('plotly.js');

module.exports = () => {
    const words = wordcounter();
    let words = words.reduce(w => w.key);
    let counts = words.reduce(w => w.value);
    let data = [{
        x: words,
        y: counts,
        type: 'bar'
    }];

    return Plotly.newPlot('chart', data);
}