const launchesModel = require('../../models/launches.model');

// FUNCTIONS
const getAllLaunches = (req, res) => {
    return res.status(200).json(launchesModel.getAllData());
}

const addNewLaunch = (req, res) => {
    const launch = req.body;

    // check 1
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: 'Missing important argument',
        });
    }

    // set date
    launch.launchDate = new Date(launch.launchDate); 

    // check 2
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid datetime',
        });
    }

    // add
    launchesModel.addNewLaunch(launch);
}

// EXPORT
module.exports = {
    getAllLaunches,
    addNewLaunch,
}