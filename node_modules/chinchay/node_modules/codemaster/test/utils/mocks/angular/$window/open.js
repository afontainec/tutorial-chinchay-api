// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const { assert } = require('chai');
const { utils } = require('../../../../..');

const { $window } = utils.mocks.angular;


// Our parent block
describe('Utils: mock $window open', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('happy path', () => { // eslint-disable-line no-undef
    assert.equal($window.openingUrl, '');
    $window.open('url');
    assert.equal($window.openingUrl, 'url');
  });


});
