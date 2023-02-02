const { request, get } = require('https');

// with request
request('https://www.google.com', (res) => {
    res.on('data', (chunk) => console.log(`DATA: ${chunk}`));
    res.on('end', () => console.log('NO_MORE_DATA'));
}).end();

// with get
get('https://www.google.com', (res) => {
    res.on('data', (chunk) => console.log(`DATA: ${chunk}`));
    res.on('end', () => console.log('NO_MORE_DATA'));
})