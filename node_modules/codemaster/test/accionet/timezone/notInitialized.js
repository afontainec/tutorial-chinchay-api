/* global describe, it */
// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const { assert } = require('chai');
const { timezone } = require('../../../').Accionet;

// Our parent block
describe('Timezone.updateTimezone', () => { // eslint-disable-line max-lines-per-function

  it('Not initialized', (done) => {
    timezone.clearTimezone();
    assert.isTrue(timezone.notInitialized());
    done();
  });

  it('Initialized', (done) => {
    timezone.set();
    assert.isFalse(timezone.notInitialized());
    done();
  });
});
