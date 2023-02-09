const express = require('express');


// VARS
const app = express();


// MIDDLEWARE
app.use((req, res, next) => {
    const start = new Date();
    next();
    const delta = new Date() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});
app.use(express.json());


module.exports = app;