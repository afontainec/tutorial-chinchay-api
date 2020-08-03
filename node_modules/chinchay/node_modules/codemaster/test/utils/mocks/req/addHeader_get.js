// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');
const { utils } = require('../../../..');

const Req = utils.mocks.express.req;

const req = new Req();

const { assert } = chai;

// Our parent block
describe('Utils: mock req addHeader and the get', () => { // eslint-disable-line no-undef, max-lines-per-function
  it('key is undef in addHeader', (done) => { // eslint-disable-line no-undef
    const before = utils.cloneJSON(req.headers);
    req.addHeader(null, 'value');
    assert.deepEqual(before, req.headers);
    done();
  });

  it('key is undef in get', (done) => { // eslint-disable-line no-undef
    const result = req.get();
    assert.isUndefined(result);
    done();
  });

  it('key is undef in addHeader', (done) => { // eslint-disable-line no-undef
    req.addHeader('key', 'value');
    assert.equal(req.headers.key, 'value');
    done();
  });
});
