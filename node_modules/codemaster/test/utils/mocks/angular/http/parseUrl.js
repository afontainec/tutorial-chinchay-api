// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const { assert } = require('chai');
const { utils } = require('../../../../..');

const { $http } = utils.mocks.angular;


// Our parent block
describe('Utils: mock $http', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('starts with /', (done) => { // eslint-disable-line no-undef
    $http.setHost('http://localhost:3000');
    const url = $http.parseUrl('/leases/find');
    const expected = 'http://localhost:3000/leases/find';
    assert.equal(url, expected);
    done();
  });

  it('url is undefined', (done) => { // eslint-disable-line no-undef
    const url = $http.parseUrl();
    assert.isUndefined(url);
    done();
  });

  it('does not start with /', (done) => { // eslint-disable-line no-undef
    const url = $http.parseUrl('http://localhost:5000/leases/find');
    const expected = 'http://localhost:5000/leases/find';
    assert.equal(url, expected);
    done();
  });
});
