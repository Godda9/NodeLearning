const planetsModel  = require('../../models/planets.model');

// FUNCTIONS
const getAllPlanets = (req, res) => {
    return res.status(200).json(planetsModel.getAllData());
}

// EXPORT
module.exports = {
    getAllPlanets,
};