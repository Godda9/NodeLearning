const http = require('http');

const PORT = 3000;
const SERVER = http.createServer((req, res) => {
    if (req.url === '/test0') {
        //res.writeHead(200, {
        //    'Content-Type': 'application/json',
        //});
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            id: 0,
            text: 'abc',
        }));
    } else if (req.url === '/test1') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.write(`
            <html>
                <body>
                    <h2>Html text</h2>
                </body>
            </html>
        `);
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

SERVER.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})