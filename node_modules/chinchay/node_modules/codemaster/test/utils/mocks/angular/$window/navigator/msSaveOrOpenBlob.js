// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const { assert } = require('chai');
const { utils } = require('../../../../../..');

const { $window } = utils.mocks.angular;


// Our parent block
describe('Utils: mock $window navigator.msSaveOrOpenBlob', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('happy path', () => { // eslint-disable-line no-undef
    $window.navigator.msSaveOrOpenBlob('value', 'key');
    const result = $window.navigator.SAVED_OR_OPENED_BLOBs;
    const expected = { key: 'value' };
    assert.deepEqual(result, expected);

  });


});
