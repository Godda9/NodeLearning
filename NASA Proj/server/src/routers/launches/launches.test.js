const supertest = require('supertest');
const app = require('../../app');


describe('Testing GET /launches', () => {
    test('StatusCode is 200', async() => {
        const response = await supertest(app)
            .get('/launches')
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

describe('Testing POST /launches', () => {
    const completeLaunchData = {
        mission: 'TestM',
        rocket: 'TestR',
        target: 'TestT',
        launchDate: 'January 4, 2028',
    }

    const launchDataWithoutDate = {
        mission: 'TestM',
        rocket: 'TestR',
        target: 'TestT',
    }

    test('StatusCode is 201 on good request', async() => {
        const response = await supertest(app)
            .post('/launches')
            .send(completeLaunchData)
            .expect('Content-Type', /json/)
            .expect(201);
    });

    test('StatusCode is 400 on request without launchDate', async() => {
        const response1 = await supertest(app)
            .post('/launches')
            .send(launchDataWithoutDate)
            .expect('Content-Type', /json/)
            .expect(400);
    });
});