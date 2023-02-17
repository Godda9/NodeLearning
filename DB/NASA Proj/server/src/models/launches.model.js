const { default: mongoose } = require('mongoose');
const launchesDB = require('./launches.mongo');
const planetsDB = require('./planets.mongo');


const launches = new Map();
const DEFAULT_FLIGHT_NUMBER = 100;


// launches.set(launch.flightNumber, launch);
const saveLaunch = async(launch) => {
    const planet = await planetsDB.findOne({
        keplerName: launch.target,
    });

    if (!planet) {
        throw new Error('No matching planet was found.');
    }

    await launchesDB.findOneAndUpdate({
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true,
    });
}


// GET LATEST ID
const getLatestFlightNumber = async() => {
    const latestLaunch = await launchesDB.findOne().sort('-flightNumber');
    
    if(!latestLaunch) {
        return DEFAULT_FLIGHT_NUMBER;
    }

    return latestLaunch.flightNumber;    
}


// GET ALL DATA FUNCTION
const getAllData = async() => { 
    return await launchesDB.find({}, {
        '__v': 0, 
        '_id': 0, 
    });
}


// ADD NEW LAUNCH
const addNewLaunch = async(item) => {
    const newFlightNumber = await getLatestFlightNumber() + 1;

    const newLaunch = Object.assign(item, {
        flightNumber: newFlightNumber,
        customer: ['ZTM', 'NASA'],
        upcoming: true,
        success: true,
    });

    await saveLaunch(newLaunch);
}


// REMOVE LAUNCH
const removeLaunch = (id) => {
    const removedLaunch = launches.get(id);
    removedLaunch.upcoming = false;
    removedLaunch.success = false;
    return removedLaunch;
}


// CHECK ID
const existsLaunchWithId = (id) => launches.has(id);


module.exports = {
    getAllData, 
    addNewLaunch,
    removeLaunch,
    existsLaunchWithId,
}

