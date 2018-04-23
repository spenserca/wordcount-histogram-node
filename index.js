'use strict';

module.exports = function (input) {
    let text = input ? input : 'one one two three four five six seven eight nine ten eleven';
    return text.replace(/[^a-zA-Z\s]/g, ' ')
        .split(/\s/)
        .filter(s => s != '')
        .map(s => s.toUpperCase())
        .reduce(updateExistingOrAddNewValues, [])
        .sort(byValueDescAlphaAsc)
        .slice(0, 10);
}

const updateExistingOrAddNewValues = (accumulator, value) => {
    let existingWord = accumulator.find(el => el.key == value);
    if (!existingWord) {
        accumulator.push({ key: value, value: 1 });
    }
    else {
        accumulator[accumulator.indexOf(existingWord)].value++;
    }
    return accumulator;
}

const byValueDescAlphaAsc = (a, b) => {
    if (a.value === b.value) {
        return sortAlphabeticallyAsc(a, b);
    }

    // Sort descending by value
    return b.value - a.value;
};

const sortAlphabeticallyAsc = (a, b) => {
    return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
};