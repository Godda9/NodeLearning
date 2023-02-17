const planetsModel  = require('../../models/planets.model');

// FUNCTIONS
const getAllPlanets = async(req, res) => {
    return res.status(200).json(await planetsModel.getAllData());
}

// EXPORT
module.exports = {
    getAllPlanets,
};