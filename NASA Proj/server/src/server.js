const http = require('http');
const app = require('./app');


// VARS
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);


// LAUNCH
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});