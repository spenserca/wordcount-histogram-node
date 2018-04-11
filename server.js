'use strict';

import express from "express";
import { join } from "path";
const app = express();
const port = 5000;

app.get('/', (req, res) => res.sendFile(join(__dirname, '/index.html')));
app.get('/site.js', (req, res) => res.send(join(__dirname, '/site.js')));

app.listen(port, () => console.log(`Application running on ${port}`));

app.use((req, res, next) => {
    res.status(404).send('Sorry can\'t find that!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});