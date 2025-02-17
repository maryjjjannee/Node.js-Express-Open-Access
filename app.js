const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app:startup');

const app = express();
const port = 3100;

app.get('/', (req, res) => {
    res.send('Hello World! This is my first Node.js app');
});

app.listen(port, () => {
    debug("Listening on port " + chalk.green(" : " + port));
});