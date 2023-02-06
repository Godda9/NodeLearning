const express = require('express');

const app = express();
const PORT = 3000;
const data = [
    { id: 0, text: 'abc0', },
    { id: 1, text: 'abc1', },
    { id: 2, text: 'abc2', },
];

// MIDDLEWARE
app.use((req, res, next) => {
    const start = Date.now();
    next(); // process request
    // actions go here...
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

// MAIN
app.get('/data', (req, res) => {
    res.status(200).json(data);
});

app.get('/data/:id', (req, res) => {
    const id = +req.params.id;
    const object = data[id];
    if (object) {
        res.status(200).json(object);
    } else {
        res.status(404).json({
            error: "Invalid request."
        });
    }
});

// LAUNCH
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});



