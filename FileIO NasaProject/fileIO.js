const { parse } = require('csv-parse');
const fs = require('fs');

// main
const results = [];

// creating readStream for our csv-parser
fs.createReadStream('kepler_data.csv')
    // readable.pipe(writeable)
    // converting from bytes to normal
    .pipe(parse({
        columns: true,
        comment: '#',
    }))
    .on('data', (chunk) => {
        results.push(chunk);
    })
    .on('error', (error) => {
        console.log(error);
    })
    .on('end', () => {
        console.log(results);
    })
