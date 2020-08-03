/* global describe, it */
// During the test the env variable is set to test
process.env.NODE_ENV = 'test';
const Accionet = require('../../../services/accionet');

// Our parent block
describe('Accionet.resolveMeAlways', () => { // eslint-disable-line max-lines-per-function
  it('happy path: when promise is resolved', (done) => {
    Accionet.resolveMeAlways(resolvePromise()).then(() => {
      done();
    }).catch(() => {
      done('should not be here');
    });
  });
  it('happy path: when promise is rejected', (done) => {
    Accionet.resolveMeAlways(rejectPromise()).then(() => {
      done();
    }).catch(() => {
      done('should not be here');
    });
  });
  it('happy path: when promise is rejected and alertMail = true', (done) => {
    Accionet.resolveMeAlways(rejectPromise(), true).then(() => {
      done();
    }).catch(() => {
      done('should not be here');
    });
  });
});


const resolvePromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve();
    }, 100);
  });
};

const rejectPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject();
    }, 100);
  });
};
