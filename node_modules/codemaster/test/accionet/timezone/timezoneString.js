// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const { assert } = require('chai');
const { timezone } = require('../../../').Accionet;

// Our parent block
describe('Timezone.timezoneString', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('is negative number', async () => { // eslint-disable-line no-undef
    assert.equal(timezone.timezoneString(-4), '+04');
  });

  it('is positive number', async () => { // eslint-disable-line no-undef
    assert.equal(timezone.timezoneString(4), '-04');

  });

  it('is greater than 10', async () => { // eslint-disable-line no-undef
    assert.equal(timezone.timezoneString(11), '-11');

  });

  it('it is not a number', async () => { // eslint-disable-line no-undef
    assert.equal(timezone.timezoneString('whatever'), '-00');

  });
});
