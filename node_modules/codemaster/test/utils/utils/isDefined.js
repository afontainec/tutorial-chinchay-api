// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../..').utils;

const assert = chai.assert; //eslint-disable-line


// Our parent block
describe('Utils: isDefined', () => { // eslint-disable-line


  it('is null',  (done) => { // eslint-disable-line
    const bool = Utils.isDefined(null);
    assert.isFalse(bool);
    done();
  });

  it('is undefined',  (done) => { // eslint-disable-line
    const bool = Utils.isDefined();
    assert.isFalse(bool);
    done();
  });

  it('exists',  (done) => { // eslint-disable-line
    const bool = Utils.isDefined('');
    assert.isTrue(bool);
    done();
  });
});
