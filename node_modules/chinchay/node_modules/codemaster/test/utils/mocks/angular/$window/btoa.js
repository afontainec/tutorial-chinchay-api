// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const { assert } = require('chai');
const { utils } = require('../../../../..');

const { $window } = utils.mocks.angular;


// Our parent block
describe('Utils: mock $window btoal', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('happy path', () => { // eslint-disable-line no-undef
    assert.equal($window.openingUrl, '');
    const encoded = $window.btoa('url');
    assert.notEqual(encoded, 'url');
    assert.equal(encoded, 'dXJs');
  });


});
