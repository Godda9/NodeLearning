const express = require('express');
const cluster = require('cluster');
const os = require('os');

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

    delay(9000);
    res.send(`Delayed! ${process.pid}`)
});

// clustering
if (cluster.isMaster) {
    console.log(`Master process started, pID ${process.pid}`);
    const NUM_WORKERS = os.cpus().length;
    for (let i = 0; i < NUM_WORKERS; i++) {
        cluster.fork();
    }
} else {
    console.log(`Worker process started, pID ${process.pid}`);
    app.listen(3000);
}
