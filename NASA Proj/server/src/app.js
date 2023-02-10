const express = require('express');
const cors = require('cors');
const path = require('path');
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
app.use(express.static(path.join(__dirname, '..', 'public')));

// MAIN
app.use(planetsRouter);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

// EXPORT
module.exports = app;