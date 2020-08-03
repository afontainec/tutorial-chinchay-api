// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const { assert } = require('chai');
const { utils } = require('../../../../../..');

const { $window } = utils.mocks.angular;


// Our parent block
describe('Utils: mock $window btoal', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('happy path', () => { // eslint-disable-line no-undef
    $window.sessionStorage.setItem('key', 'value');
    const result = $window.sessionStorage.getItem('key');
    assert.equal(result, 'value');
    $window.sessionStorage.clear();
    const again = $window.sessionStorage.getItem('key');

    assert.isUndefined(again);

  });


});
