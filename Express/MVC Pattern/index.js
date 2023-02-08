const express = require('express');
const dataRouter = require('./routers/data.router');


// INIT
const app = express();
const PORT = 3000;


// MIDDLEWARE
app.use((req, res, next) => {
    const startedAt = new Date();
    next();
    const diff = new Date - startedAt;
    console.log(`${req.method} ${req.url} ${diff}ms`);
});
app.use(express.json());


// ROUTES
app.use('/data', dataRouter);


// LAUNCH
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
