const { rejects } = require('assert');
const { parse } = require('csv-parse');
const fs = require('fs');
const path = require('path');

const planetsDB = require('./planets.mongo');

// READ
const loadPlanetsData = () => {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
        .pipe(parse({
            comment: '#',
            columns: true,
        }))
        .on('data', async(chunk) => {
            if (habitablePlanet(chunk)) {
                //results.push(chunk);

                // TODO create -> inser + update = upsert
                saveDataDB(chunk);
            }
        })
        .on('error', (error) => {
            reject(error);
        })
        .on('end', async() => {
            const countPlanetsFound = (await getAllData()).length;
            console.log(countPlanetsFound)
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
const getAllData = async() => {
    //return results;
    return await planetsDB.find({});
};


const saveDataDB = async(chunk) => {
    // TODO create -> inser + update = upsert
    try {
        await planetsDB.updateOne({
            keplerName: chunk.kepler_name,
        }, {
            keplerName: chunk.kepler_name,
        }, {
            upsert: true,
        });
    } catch (error) {
        console.error(`Colud not save planet: ${error}`);
    }
}


// EXPORT
module.exports = {
    getAllData,
    loadPlanetsData,
};