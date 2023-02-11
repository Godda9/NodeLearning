const express= require('express');
const { getAllLaunches, addNewLaunch } = require('./launches.controller');

// VARS
const launchesRouter = express.Router();

// METHODS
launchesRouter.get('/', getAllLaunches);
launchesRouter.post('/', addNewLaunch);

// EXPORT
module.exports = launchesRouter;