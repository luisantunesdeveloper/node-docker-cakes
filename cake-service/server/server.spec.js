var should = require('should');
var server = require('./server');

describe('Server', () => {
    it('should not return cakes beacuse there is no port', () => {
        return server.start({repo: {}}).should.be.rejectedWith(/port/);
    });

    it('should not return a server because there is no repo', () => {
        return server.start({port: {}}).should.be.rejectedWith(/repo/);
    });
});
