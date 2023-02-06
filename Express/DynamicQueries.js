const express = require('express');

const app = express();
const PORT = 3000;
const data = [
    { id: 0, text: 'abc0', },
    { id: 1, text: 'abc1', },
    { id: 2, text: 'abc2', },
];

app.get('/data', (req, res) => {
    res.status(200).json(data);
})

app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    const object = data[+id];
    if (object) {
        res.status(200).json(object);
    } else {
        res.status(404).json({'error': 'nodata'})
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


