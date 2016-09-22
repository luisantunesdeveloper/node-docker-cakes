'use strict';

var supertest = require('supertest');
var should = require('should');

describe('CakeServiceIntegrationTests', () => {
    var api = supertest('http://localhost:8888');

    it('should get 200 for the cakes request', (done) => {
        api.get('/cakes').expect(200, done);
    });
});
