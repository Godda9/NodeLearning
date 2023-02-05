const { parse } = require('csv-parse');
const fs        = require('fs');

//main
const results = [];

// reading data
fs.createReadStream('kepler_data.csv')
    // converting buffer to normal text readable.pipe(writeable)
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
    .on('data', (chunk) => {
        if (habitablePlanet(chunk)) { 
            results.push(chunk) 
        }
    })
    .on('error', (error) => {
        console.log(error);
    })
    .on('end', () => {
        console.log(results.map((planetItem) => {
            return planetItem['kepler_name'];
        }))
        console.log(`Found ${results.length} habitable planets.`)
    })

// finding habitable planets
const habitablePlanet = (planetObject) => {
    return planetObject['koi_disposition'] === 'CONFIRMED' &&
        planetObject['koi_insol'] > 0.36 && 
        planetObject['koi_insol'] < 1.11 &&
        planetObject['koi_prad']  < 1.6;
}