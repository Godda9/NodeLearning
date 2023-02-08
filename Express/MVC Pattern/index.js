const express = require('express');
const dataController = require('./controllers/data.controller');


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
app.get('/data', dataController.getData);
app.get('/data/:id', dataController.getDataById);
app.post('/data', dataController.postData);


// LAUNCH
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
