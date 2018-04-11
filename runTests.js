'use strict';

import Jasmine from "jasmine";
import { JUnitXmlReporter } from "jasmine-reporters";
import JasmineConsoleReporter from "jasmine-console-reporter";
import { join } from "path";

const jasmine = new Jasmine();
jasmine.loadConfig({
    spec_dir: '.',
    spec_files: [
        'spec/*.spec.js'
    ]
});

var junitReporter = new JUnitXmlReporter({
    filePrefix: "TEST-",
    savePath: join(__dirname, 'reports'),
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