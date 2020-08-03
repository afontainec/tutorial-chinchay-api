// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const { assert } = require('chai');
const { timezone } = require('../../../').Accionet;

// Our parent block
describe('Timezone.updateTimezone', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('Every timezone is defined', (done) => { // eslint-disable-line no-undef
    timezone.clearTimezone();
    let status = timezone.status();

    assert.notExists(status.timezone['America/Santiago']);
    assert.notExists(status.timezone['America/Montevideo']);
    assert.notExists(status.timezone['America/Asuncion']);
    assert.notExists(status.timezone['America/Mexico_City']);

    timezone.set();
    status = timezone.status();

    assert.exists(status.timezone['America/Santiago']);
    assert.exists(status.timezone['America/Montevideo']);
    assert.exists(status.timezone['America/Asuncion']);
    assert.exists(status.timezone['America/Mexico_City']);
    done();
  });
});
