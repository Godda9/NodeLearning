const { launches } = require('../../models/launches.model');

// FUNCTIONS
const getAllLaunches = (req, res) => {
    return res.status(200).json(Array.from(launches.values()));
}

// EXPORT
module.exports = {
    getAllLaunches,
}