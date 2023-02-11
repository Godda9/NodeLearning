const launchesModel = require('../../models/launches.model');

// FUNCTIONS
const getAllLaunches = (req, res) => {
    return res.status(200).json(launchesModel.getAllData());
}

// EXPORT
module.exports = {
    getAllLaunches,
}