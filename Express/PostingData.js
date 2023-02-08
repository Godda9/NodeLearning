const express = require('express');


// INIT
const app = express();
const PORT = 3000;
const data = [
    {id: 0, text: 'abc0'},
    {id: 1, text: 'abc1'},
    {id: 2, text: 'abc2'},
];


// MIDDLEWARE
app.use((req, res, next) => {
    const startedAt = new Date();
    next();
    const diff = new Date - startedAt;
    console.log(`${req.method} ${req.url} ${diff}ms`);
});
app.use(express.json());


// ROUTES
app.get('/data', (req, res) => {
    res.status(200).json(data);
});
app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    const object = data[+id];
    if (object) {
        res.status(200).json(object);
    } else {
        res.status(400).json({
            error: 'Object not found.',
        });
    }
});
app.post('/data', (req, res) => {
    if (!req.body.text) {
        return res.status(400).json({
            error: 'No text parameter provided.'
        });
    }

    const object = {
        text: req.body.text,
        id: data.length,
    };
    data.push(object);
    res.status(200).json(object);
});


// LAUNCH
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
