const { send } = require('./request');
const { read } = require('./response');

function request(url, data) {
    send(url, data);
    return read();
}

console.log(request('https://www.google.com', {one: 1, two: 2, three: 3}));

//console.log(require.cache) // cache of all imported/exported modules