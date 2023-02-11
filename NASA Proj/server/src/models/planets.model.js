const { rejects } = require('assert');
const { parse } = require('csv-parse');
const fs = require('fs');
const path = require('path');

// VARS
const results = [];

// READ
const loadPlanetsData = () => {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
        .pipe(parse({
            comment: '#',
            columns: true,
        }))
        .on('data', (chunk) => {
            if (habitablePlanet(chunk)) {
                results.push(chunk);
            }
        })
        .on('error', (error) => {
            reject(error);
        })
        .on('end', () => {
            resolve();
        });
    });
}    
    

// finding habitable planets
const habitablePlanet = (planetObject) => {
    return planetObject['koi_disposition'] === 'CONFIRMED' &&
        planetObject['koi_insol'] > 0.36 && 
        planetObject['koi_insol'] < 1.11 &&
        planetObject['koi_prad']  < 1.6;
}


// GET ALL DATA FUNCTION
const getAllData = () => results;


// EXPORT
module.exports = {
    getAllData,
    loadPlanetsData,
};