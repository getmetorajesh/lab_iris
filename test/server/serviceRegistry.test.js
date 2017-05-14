require('should');
const config = require('../../config');
const ServiceRegistry = require('../../server/serviceRegistry');


describe('ServiceRegistry', () => {
    it('should successfully timeoiut', (done) => {
        const serviceRegistry = new ServiceRegistry(42);
        serviceRegistry._timeout.should.equal(42);
    });
});