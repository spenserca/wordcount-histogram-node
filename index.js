'use strict';

export default function (input) {
    let text = input ? input : 'one one two three four five six seven eight nine ten eleven';
    return text.replace(/[^a-zA-Z\s]/g, ' ')
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
        .sort(byValueDescAlphaAsc)
        .slice(0, 10);
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