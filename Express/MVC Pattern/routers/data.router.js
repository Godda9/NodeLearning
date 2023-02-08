const express = require('express');
const dataController = require('../controllers/data.controller');

// DATA ROUTER
const dataRouter = express.Router();
dataRouter.get('/', dataController.getData);
dataRouter.get('/:id', dataController.getDataById);
dataRouter.post('/', dataController.postData);

// EXPORT
module.exports = dataRouter;