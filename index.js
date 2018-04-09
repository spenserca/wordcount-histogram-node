'use strict';

module.exports = (input) => {
    return input.replace(/[^a-zA-Z\s]/g, ' ')
        .split(/\s/)
        .filter(s => s != '')
        .map(s => s.toUpperCase())
        .reduce((acc, value, index, array) => {
            let word = acc.find(el => el.key == value);
            if (!word) {
                acc.push({ key: value, value: 1 });
            }
            else {
                acc[acc.indexOf(word)].value++;
            }

            return acc;
        }, [])
        .sort(greatestToLeastValue)
        .slice(0, 10);
}

function greatestToLeastValue(a, b) {
    if (a.value === b.value) {
        return sortAlphabetically(a, b);
    }

    return b.value - a.value;
}

function sortAlphabetically(a, b) {
    return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
}