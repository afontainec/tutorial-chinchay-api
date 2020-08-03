// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../..').utils;

const assert = chai.assert; //eslint-disable-line


// Our parent block
describe('Utils: deepEqual', () => { // eslint-disable-line


  it('They are the same',  (done) => { // eslint-disable-line
    const bool = Utils.deepEqual('a', 'a');
    assert.equal(bool, true);
    done();
  });

  it('They are the same',  (done) => { // eslint-disable-line
    const bool = Utils.deepEqual({ a: 1, b: { c: ['a', true] } }, { a: 1, b: { c: ['a', true] } });
    assert.equal(bool, true);
    done();
  });

  it('They are not the same',  (done) => { // eslint-disable-line
    const bool = Utils.deepEqual({ a: 1, b: { c: ['a', true] } }, { a: 1, b: { c: ['a', false] } });
    assert.equal(bool, false);
    done();
  });

  it('They are not the same',  (done) => { // eslint-disable-line
    const bool = Utils.deepEqual({ a: 1, b: { c: ['a', true] } }, { a: 1, b: { d: ['a', true] } });
    assert.equal(bool, false);
    done();
  });
});
