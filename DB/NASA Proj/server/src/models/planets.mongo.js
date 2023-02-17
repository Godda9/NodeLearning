const mongoose = require('mongoose');

// Schema
const planetsSchema = mongoose.Schema({
    keplerName: {
        type: String,
        required: true,
    },
});

// Connects planetsScema with the "planets" collection
const planetsModel = mongoose.model('Planet', planetsSchema);

// Export
module.exports = planetsModel;