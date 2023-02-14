const express = require('express');


const app = express();

function delay(mscnds) {
    const startTime = Date.now();
    while (Date.now() - startTime < mscnds) {
        // event loop is blocked...
    }
}

app.get('/', (req, res) => {
    res.send(`Performance example ${process.pid}`);
});

app.get('/timer', (req, res) => {
    // JSON.stringify({}) => "{}"
    // JSON.parse("{}") => {}
    // [5,1,2,3,4].sort()

    delay(4000);
    res.send(`Delayed! ${process.pid}`)
});


console.log(`Worker process started, pID ${process.pid}`);
app.listen(3000);
// CONSOLE: 
//pm2 start [server.js] -i [amount/max] -l [logs.txt]
//pm2 restart/reload(one-by-one)
