'use strict';

const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));

app.listen(port, () => console.log(`Application running on ${port}`));

app.use((req, res, next) => {
    res.status(404).send('Sorry can\'t find that!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});