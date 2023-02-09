const http = require('http');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');

// VARS
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

// PRE-LOAD DATA
const startServer = async() => {
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

// LAUNCH
startServer();

