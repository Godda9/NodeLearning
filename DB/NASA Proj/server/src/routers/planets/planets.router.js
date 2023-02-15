const express = require('express');
const planetsController = require('./planets.controller');

// VARS
const planetsRouter = express.Router();

// MAIN
planetsRouter.get('/', planetsController.getAllPlanets);

// EXPORT
module.exports = planetsRouter;