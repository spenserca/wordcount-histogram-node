'use strict';

const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Application running on ${port}`));

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});