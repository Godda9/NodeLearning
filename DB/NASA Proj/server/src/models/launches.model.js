const launches = new Map();
let latestFlightNumber = 100; 

const launch = {
    flightNumber: 100,
    mission: 'Test mission 1',
    rocket: 'Test rocket 1',
    launchDate: new Date('December 27, 2030'),
    target: 'Test destination 1',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

// GET ALL DATA FUNCTION
const getAllData = () => Array.from(launches.values());

// ADD NEW LAUNCH TO COLLECTION
const addNewLaunch = (item) => {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(item, {
        flightNumber: latestFlightNumber,
        customer: ['ZTM', 'NASA'],
        upcoming: true,
        success: true,
    }));
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

