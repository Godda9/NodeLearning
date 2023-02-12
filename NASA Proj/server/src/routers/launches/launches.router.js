const express= require('express');
const { getAllLaunches, addNewLaunch, removeLaunch } = require('./launches.controller');

// VARS
const launchesRouter = express.Router();

// METHODS
launchesRouter.get('/', getAllLaunches);
launchesRouter.post('/', addNewLaunch);
launchesRouter.delete('/:id', removeLaunch);

// EXPORT
module.exports = launchesRouter;