const model = require('../models/model.model');


const getData = (req, res) => {
    res.status(200).json(model);
};

const getDataById = (req, res) => {
    const id = req.params.id;
    const object = model[+id];
    if (object) {
        res.status(200).json(object);
    } else {
        res.status(400).json({
            error: 'Object not found.',
        });
    }
};

const postData = (req, res) => {
    if (!req.body.text) {
        return res.status(400).json({
            error: 'No text parameter provided.'
        });
    }

    const object = {
        text: req.body.text,
        id: model.length,
    };
    model.push(object);
    res.status(200).json(object);
};


module.exports = {
    getData, 
    getDataById,
    postData,
};