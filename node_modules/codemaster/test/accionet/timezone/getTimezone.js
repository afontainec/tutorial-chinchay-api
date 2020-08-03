// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const { assert } = require('chai');
const { timezone } = require('../../../').Accionet;

// Our parent block
describe('Timezone.updateTimezone', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('Timezone.set has not being called', (done) => { // eslint-disable-line no-undef
    timezone.clearTimezone();
    const tz = timezone.getTimezone('Ciudad de México');
    const status = timezone.status();
    assert.equal(tz, status.timezone['America/Mexico_City']);
    assert.exists(tz);
    done();
  });

  it('City is not defined', (done) => { // eslint-disable-line no-undef
    timezone.updateTimezone();
    const tz = timezone.getTimezone();
    const status = timezone.status();
    assert.equal(tz, status.timezone['America/Santiago']);
    done();
  });

  it('City is Santiago', (done) => { // eslint-disable-line no-undef
    const tz = timezone.getTimezone('Santiago');
    const status = timezone.status();
    assert.equal(tz, status.timezone['America/Santiago']);
    done();
  });

  it('City is Montevideo', (done) => { // eslint-disable-line no-undef
    const tz = timezone.getTimezone('Montevideo');
    const status = timezone.status();
    assert.equal(tz, status.timezone['America/Montevideo']);
    done();
  });

  it('City is Ciudad de México', (done) => { // eslint-disable-line no-undef
    const tz = timezone.getTimezone('Ciudad de México');
    const status = timezone.status();
    assert.equal(tz, status.timezone['America/Mexico_City']);
    done();
  });

  it('City is not registered: use Santiago', (done) => { // eslint-disable-line no-undef
    const tz = timezone.getTimezone('Otra');
    const status = timezone.status();
    assert.equal(tz, status.timezone['America/Santiago']);
    done();
  });
});
