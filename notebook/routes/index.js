const express = require('express');

const tipsRouter = require('./notes');

const app = express();

app.use('/notes', tipsRouter);

module.exports = app;
