const mongoose = require('mongoose');

// Schema
const launchesSchema  = mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
    },
    mission: {
        type: String,
        required: true,
    },
    rocket: {
        type: String,
        required: true,
    },
    launchDate: {
        type: Date,
        required: true,
    },
    target: {
        type: String,
        required: true,
    },
    customers: [ String ],
    upcoming: { 
        type: Boolean,
        required: true,
        default: true,
    },
    success: { 
        type: Boolean,
        required: true,
        default: true,
    },
});

// Connects the launchesSchema with the "launches" collection
const launchesModel = mongoose.model('Launch', launchesSchema);

// Export
module.exports = launchesModel;