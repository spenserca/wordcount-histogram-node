'use strict';

const fs = require('fs');
const text = fs.readFileSync('./spec/input.txt', 'utf8');
const index = require('../index');

describe('index', function () {
    it('should return 10 items', function () {
        expect(index(text).length).toEqual(10);
    });

    it('should return items in descending order', function () {
        let input = 'the the my you';
        expect(index(input)).toEqual([{ the: 2 }, { my: 1 }, { you: 1 }]);
    });

    it('should return items in alphabetical order if there is a tie', function () {
        let input = 'the my you them';
        expect(index(input)).toEqual([{ my: 1 }, { the: 1 }, { them: 1 }, { you: 1 }]);
    });

    it('should remove punctuation from input', function () {
        let input = 'you, my. my; :?\'-()&$!'
        expect(index(input)).toEqual([{ my: 2 }, { you: 1 }]);
    });
});