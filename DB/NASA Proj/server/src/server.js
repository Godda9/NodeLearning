const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');

// VARS
const PORT = process.env.PORT || 8000;
const MONGO_URL = "mongodb+srv://nasa-api:H9Njbho0sp8OqlhF@nasacluster.hzs3ro5.mongodb.net/?retryWrites=true&w=majority"
const server = http.createServer(app);

// PRE-LOAD DATA
const startServer = async() => {
    // Mongo DB
    mongoose.connection.once('open', () => {
        console.log('Mongo DB is ready!');
    });
    mongoose.connection.on('error', console.log);

    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

// LAUNCH
startServer();

