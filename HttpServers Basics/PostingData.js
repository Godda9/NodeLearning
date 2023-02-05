const http = require('http');

const data = [
    {
        id: 0,
        text: 'abc0',
    },
    {
        id: 1,
        text: 'abc1',
    },
    {
        id: 2,
        text: 'abc2',
    }
]

const PORT = 3000;
const SERVER = http.createServer((req, res) => {
    const items = req.url.split('/');

    if (req.method === 'POST' && req.url === 'data') {
        req.on('data', (chunk) => {
            const dataToAdd = chunk.toString();
            console.log('REQUEST: ', dataToAdd);
            data.push(JSON.parse(dataToAdd));
        });
    } else if (req.method === 'GET' && items[1] === 'data') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length === 3) {
            res.end(JSON.stringify(data[+items[2]]));
        } else {
            res.end(JSON.stringify(data));
        }
    } else {
        res.statusCode = 404;
        res.end();
    }

});

SERVER.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})