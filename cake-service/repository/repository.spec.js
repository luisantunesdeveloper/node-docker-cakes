const should = require('should');
const repository = require('./repository');
const sinon = require('sinon');

describe('Repository', () => {

    it('should not connect if there is no host', () => {
        return repository.connect({}).should.be.rejectedWith(/host/);
    });

    it('should connect', () => {
        return repository.connect().should.be.a.Promise();
    });

    it('should return a new repo', () => {
        //Pay attention, it's mocked
        const mysqlMock = sinon.mock(require('mysql'));
        mysqlMock.expects('createConnection').once();
        return repository.connect({
            host:'localhost',
            port: 3307,
            user: 'luis',
            password: 'pass123'
        }).should.be.fulfilled();
    });

    const MYSQL_CONNECT = repository.connect({
        host:'localhost',
        port: 3307,
        user: 'luis',
        password: 'pass123'
    });

    it('should return cakes', () => {
        MYSQL_CONNECT.then((repository) => {
            repository.getCakes().then((cakes) => {
                cakes.should.ok;
            });
        });
    });
});
