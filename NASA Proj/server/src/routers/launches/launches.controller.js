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

const removeLaunch = (req, res) => {
    const id = +req.params.id;

    // if launch doesnt exist
    if (!launchesModel.existsLaunchWithId(id)) {
        return res.status(404).json({
            error: 'Not found',
        });
    }

    const removedLaunch = launchesModel.removeLaunch(id);

    return res.status(200).json({
        message: 'Removed successfully',
        object: removedLaunch,
    });
}

// EXPORT
module.exports = {
    getAllLaunches,
    addNewLaunch,
    removeLaunch,
}