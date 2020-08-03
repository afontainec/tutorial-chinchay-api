// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../../').utils;

const assert = chai.assert; //eslint-disable-line


// Our parent block
describe('Utils: cloneJSON', () => { // eslint-disable-line


  it('its is null',  (done) => { // eslint-disable-line
    const copy = Utils.cloneObject(null);
    assert.isNull(copy);
    done();
  });

  it('its is not an object',  (done) => { // eslint-disable-line
    const copy = Utils.cloneObject('string');
    assert.equal(copy, 'string');
    done();
  });

  it('happy path',  (done) => { // eslint-disable-line
    const input = {
      a: 'a',
      b: 'b',
    };
    const copy = Utils.cloneObject(input);
    assert.deepEqual(copy, input);
    done();
  });

  it('has inner objects',  (done) => { // eslint-disable-line
    const input = {
      a: 'a',
      b: { c: 'c' },
    };
    const copy = Utils.cloneObject(input);
    assert.deepEqual(copy, input);
    copy.b.c = 'not c';
    assert.equal(input.b.c, 'c', 'change on copy should not change original');
    done();
  });

  it('is array with inner objects',  (done) => { // eslint-disable-line
    const input = ['a', { c: 'c' }];
    const copy = Utils.cloneObject(input);
    assert.isArray(copy);
    assert.deepEqual(copy, input);
    copy[1].c = 'not c';
    assert.equal(input[1].c, 'c', 'change on copy should not change original');
    done();
  });


  it('is array without inner objects',  (done) => { // eslint-disable-line
    const input = ['a', 'c'];
    const copy = Utils.cloneObject(input);
    assert.isArray(copy);
    assert.deepEqual(copy, input);
    done();
  });

});
