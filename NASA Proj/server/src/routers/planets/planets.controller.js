const planets = require('../models/planets.model');

// FUNCTIONS
const getAllPlanets = (req, res) => {
    return res.status(200).json(planets);
}

// EXPORT
module.exports = {
    getAllPlanets,
};