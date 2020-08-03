// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../../').utils;

const { assert } = chai;


// Our parent block
describe('Array: add element', () => { // eslint-disable-line


  it('position is undef',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'c'];
    const element = 'd';
    const result = Utils.Array.addElement(array, element);
    const expected = ['a', 'b', 'c'];
    assert.deepEqual(result, expected);
    done();
  });

  it('array is undef',  (done) => { // eslint-disable-line
    const array = null;
    const element = 'd';
    const result = Utils.Array.addElement(array, element);
    const expected = null;
    assert.deepEqual(result, expected);
    done();
  });

  it('Happy path',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'c'];
    const element = 'd';
    const result = Utils.Array.addElement(array, element, 2);
    const expected = ['a', 'b', 'd', 'c'];
    assert.deepEqual(result, expected);
    done();
  });

  it('position > array.length',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'c'];
    const element = 'd';
    const result = Utils.Array.addElement(array, element, 100);
    const expected = ['a', 'b', 'c', 'd'];
    assert.deepEqual(result, expected);
    done();
  });

  it('position is negative',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'c'];
    const element = 'd';
    const result = Utils.Array.addElement(array, element, -100);
    const expected = ['d', 'a', 'b', 'c'];
    assert.deepEqual(result, expected);
    done();
  });

  it('position is zero',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'c'];
    const element = 'd';
    const result = Utils.Array.addElement(array, element, 0);
    const expected = ['d', 'a', 'b', 'c'];
    assert.deepEqual(result, expected);
    done();
  });
});
