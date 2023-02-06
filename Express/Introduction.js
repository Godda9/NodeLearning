const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send({
        id: 0, text: 'abc',
    });
});

app.get('/msgs', (req, res) => {
    res.send('<h2>Messages</h2>')
});

app.post('/msgs', (req, res) => {
    console.log('Updating msgs...')
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});