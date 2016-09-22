var request = require('supertest');
var should = require('should');
var server = require('../server');
var repo = require('../repository');
var sinon = require('sinon');

class Repository {
    getCakes() {}
};

describe('Cakes Api', () => {

    var app = null;
    var sandbox = null;
    var repositoryInstance = new Repository();

    beforeEach((done) => {

        sandbox = sinon.sandbox.create();

        sinon.sandbox.stub(repo, 'connect', (options) => {
            return new Promise((resolve, reject) => {
                resolve(repositoryInstance);
            });
        });

        const cakes = [
            {
              name: 'super chocolate cake with extra chocolate',
              calories: '10000'
            }, {
              name: 'surprise vanilla bomb',
              calories: '100000'
            }
        ];

        sinon.sandbox.stub(repositoryInstance, 'getCakes', () => {
            return new Promise((resolve, reject) => {
                resolve(cakes);
            });
        });

        const options = {
            port: 1234,
            repo: repositoryInstance
        };

        return server.start(options).then((server) => {
            app = server;
            done();
        });
    });

    afterEach(() => {
      app.close();
      app = null;
      sandbox.restore();
    });

    it('should return cakes', sinon.test((done) => {
        request(app)
            .get('/cakes')
            .expect((res) => {
                res.body.should.containEql({
                    name: 'super chocolate cake with extra chocolate',
                    calories: '10000'
                });
                res.body.should.containEql({
                    name: 'surprise vanilla bomb',
                    calories: '100000'
                });
            })
            .expect(200, done);
    }));
});
