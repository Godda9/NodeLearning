const express = require('express');
const cors = require('cors');
const planetsRouter = require('./routers/planets/planets.router');


// VARS
const app = express();

// MIDDLEWARE
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use((req, res, next) => {
    const start = new Date();
    next();
    const delta = new Date() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

// MAIN
app.use(planetsRouter);

// EXPORT
module.exports = app;