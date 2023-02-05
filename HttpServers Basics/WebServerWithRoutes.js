const http = require('http');

const PORT = 3000;
const SERVER = http.createServer((req, res) => {
    if (req.url === '/test0') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            id: 1,
            text: 'abc',
        }));
    } else if (req.url === '/test1') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><h2>Html text</h2</body></html');
    } else {
        res.statusCode = 404;
        res.end();
    }
});

SERVER.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})