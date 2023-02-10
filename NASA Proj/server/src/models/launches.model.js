const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: 'Test mission 1',
    rocket: 'Test rocket 1',
    launchDate: new Date('December 27, 2030'),
    target: 'Test destination 1',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
    launches,
}

