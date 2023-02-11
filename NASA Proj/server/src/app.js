const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const planetsRouter = require('./routers/planets/planets.router');
const launchesRouter = require('./routers/launches/launches.router')

// VARS
const app = express();

// MIDDLEWARE
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// MAIN
app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

// EXPORT
module.exports = app;