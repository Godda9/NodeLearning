const http = require('http');

//port
const port = 3000;

// server
const server = http.createServer((req, res) => {
    // writing headers
    res.writeHead(200, {
        'Content-Type': 'application/json',
    })
    // sending response
    res.end(JSON.stringify({
        id: 1,
        content: 'Hello from Node.',
    }))
})

// start listening on port
server.listen(port, () => {
    console.log(`Server is now listening on port ${port}`);
})



