const launchesModel = require('../../models/launches.model');

// FUNCTIONS
const getAllLaunches = (req, res) => {
    return res.status(200).json(launchesModel.getAllData());
}

const addNewLaunch = (req, res) => {
    const launch = req.body;
    launch.launchDate = new Date(launch.launchDate);
    launchesModel.addNewLaunch(launch);
    return res.status(201).json(launch);
}

// EXPORT
module.exports = {
    getAllLaunches,
    addNewLaunch,
}