const { default: mongoose } = require('mongoose');
const launchesDB = require('./launches.mongo');
const planetsDB = require('./planets.mongo');


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
const removeLaunch = async(id) => {
    const removed = await launchesDB.updateOne({
        flightNumber: id,
    }, {
        upcoming: false,
        success: false,
    });
    return removed.ok === 1 && removed.modifiedCount === 1;
}


// CHECK ID
const existsLaunchWithId = async(id) => {
    return await launchesDB.findOne({
        flightNumber: id,
    });
}


module.exports = {
    getAllData, 
    addNewLaunch,
    removeLaunch,
    existsLaunchWithId,
}

