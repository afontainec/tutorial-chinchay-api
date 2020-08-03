// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const { assert } = require('chai');
const { utils } = require('../../../../..');

const { $window } = utils.mocks.angular;


// Our parent block
describe('Utils: mock $window close', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('happy path', () => { // eslint-disable-line no-undef
    assert.isFalse($window.isClosed);
    $window.close();
    assert.isTrue($window.isClosed);
  });


});
