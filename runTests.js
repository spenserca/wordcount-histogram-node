'use strict';

const Jasmine = require('jasmine');
const reporters = require('jasmine-reporters');
const JasmineConsoleReporter = require('jasmine-console-reporter');
const path = require('path');

const jasmine = new Jasmine();
jasmine.loadConfig({
    spec_dir: '.',
    spec_files: [
        'spec/*.spec.js'
    ]
});

var junitReporter = new reporters.JUnitXmlReporter({
    filePrefix: "TEST-",
    savePath: path.join(__dirname, 'reports'),
    consolidateAll: false
});

jasmine.addReporter(junitReporter);

jasmine.addReporter(new JasmineConsoleReporter({
    colors: 2,
    cleanStack: 2
}));

jasmine.onComplete(function (passed) {
    if (passed) {
        process.exit();
    }
    else {
        console.log('At least one spec has failed');
        process.exit(1);
    }
});

jasmine.execute();