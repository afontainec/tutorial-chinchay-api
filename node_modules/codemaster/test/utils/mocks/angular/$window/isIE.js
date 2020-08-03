// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const { assert } = require('chai');
const { utils } = require('../../../../..');

const { $window } = utils.mocks.angular;


// Our parent block
describe('Utils: mock $window isIE', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('default value', () => { // eslint-disable-line no-undef
    assert.isFalse($window.isIE());
  });

  it('set to true', () => { // eslint-disable-line no-undef
    $window.windowIsIE = true;
    assert.isTrue($window.isIE());
  });

});
