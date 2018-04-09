'use strict';

module.exports = (input) => {
    return input.replace(/[^a-zA-Z\s]/g, ' ')
        .split(/\s/)
        .filter(s => s != '')
        .map(s => s.toUpperCase())
        .reduce((acc, value, index, array) => {
            let existingWord = acc.find(el => el.key == value);
            if (!existingWord) {
                acc.push({ key: value, value: 1 });
            }
            else {
                acc[acc.indexOf(existingWord)].value++;
            }

            return acc;
        }, [])
        .sort(greatestToLeastValue)
        .slice(0, 10);
}

const greatestToLeastValue = (a, b) => {
    if (a.value === b.value) {
        return sortAlphabetically(a, b);
    }

    return b.value - a.value;
}

const sortAlphabetically = (a, b) => {
    return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
}