// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const { assert } = require('chai');
const { timezone } = require('../../../').Accionet;

// Our parent block
describe('Timezone.updateTimezone', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('Happy path', (done) => { // eslint-disable-line no-undef
    timezone.clearTimezone();
    const status = timezone.status();
    timezone.updateTimezone();
    const newStatus = timezone.status();
    assert.deepEqual(status.updatedAt, newStatus.previousUpdate);
    assert.isBelow(status.updatedAt, newStatus.updatedAt);
    const chileanTimezone = timezone.getTimezone();
    assert.isTrue(chileanTimezone === '+04' || chileanTimezone === '+03');
    done();
  });

  it('Every timezone is defined', (done) => { // eslint-disable-line no-undef
    const status = timezone.status();
    assert.exists(status.timezone['America/Santiago']);
    assert.exists(status.timezone['America/Montevideo']);
    assert.exists(status.timezone['America/Asuncion']);
    assert.exists(status.timezone['America/Mexico_City']);
    done();
  });
});
