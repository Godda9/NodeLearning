const express= require('express');
const { getAllLaunches } = require('./launches.controller');

// VARS
const launchesRouter = express.Router();

// METHODS
launchesRouter.get('/launches', getAllLaunches);

// EXPORT
module.exports = launchesRouter;