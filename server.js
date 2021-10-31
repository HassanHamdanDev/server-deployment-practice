'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const stamper = require('./middleware/stamper');

const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');

app.get('/', (req, res) => {
    res.send('So WoW It`s Working !!')
});

app.get('/data', stamper, (req, res) => {
    const output = {
        name: 'Alnamer Almoqan3',
        age: 'bakmel Draste',
        time: req.timestamp
    }
    res.status(200).json(output);
});

app.get('/bad', (req, res, next) => {
    next('Ohh So You Made An Error !!')
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start() {
    app.listen(PORT, () => {
        console.log(`So server is work on ${PORT}`);
    });
}

module.exports = {
    app,
    start,
}

