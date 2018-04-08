'use strict';

module.exports = (input) => {
    const wordCounts = [];
    const output = input.replace(/[^a-zA-Z\s]/g, ' ')
        .split(/\s/)
        .filter(s => s != '')
        .reduce((acc, cv, ci, array) => {
            let word = acc.find(el => el.key == cv.toUpperCase());
            if (!word) {
                acc.push({ key: cv.toUpperCase(), value: 1 });
            }
            else {
                acc[acc.indexOf(word)].value++;
            }

            return acc;
        }, [])
        .sort(greatestToLeastValue)
        .sort(alphabetically);

    return output.slice(0, 10);
}

function greatestToLeastValue(a, b) {
    if (a.value < b.value) {
        return -1;
    }
    if (a.value > b.value) {
        return 1;
    }
    return 0;
}

function alphabetically(a, b) {
    if (a.key < b.key) {
        return -1;
    }
    if (a.key > b.key) {
        return 1;
    }
    return 0;
}