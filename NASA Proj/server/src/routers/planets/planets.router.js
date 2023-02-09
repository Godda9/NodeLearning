const express = require('express');
const planetsController = require('./planets.controller');

// VARS
const planetsRouter = express.Router();

// MAIN
planetsRouter.get('/planets', planetsController.getAllPlanets);

// EXPORT
module.exports = planetsRouter;