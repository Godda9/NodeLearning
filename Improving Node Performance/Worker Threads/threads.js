const { Worker, isMainThread, workerData } = require('worker_threads');

// workers has the same process ids
if (isMainThread) {
    console.log(`Main Thread! Process ID: ${process.pid}`);
    // creating new workers
    new Worker(__filename, {
        workerData: [7, 6, 2, 3], // passing data
    });
    new Worker(__filename, {
        workerData: [1, 3, 4, 3], // passing data
    });
} else {
    console.log(`Worker Process ID: ${process.pid}`);
    console.log(`Worker data ${workerData}, sorted: ${workerData.sort()}`);
}