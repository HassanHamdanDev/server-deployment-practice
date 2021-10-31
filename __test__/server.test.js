'use strict';

const { app } = require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('API Server Testing', () => {
    test('invalid URLS', async () => {
        const response = await request.get('/notFound');
        expect(response.status).toEqual(404);
    });
    test('if theres a Home route', async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('So WoW It`s Working !!');
    });
    test('/data works', async () => {
        const response = await request.get('/data');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object');
    });
    test('stamper middleware works', async () => {
        const response = await request.get('/data');
        expect(response.status).toEqual(200);
        expect(response.body.time).toBeDefined();
    });
});