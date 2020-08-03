// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../..').utils;

const assert = chai.assert; //eslint-disable-line


// Our parent block
describe('Array: remove element', () => { // eslint-disable-line


  it('index > array.length',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'c'];
    const index = 10;
    const expected = Utils.cloneJSON(array);
    const result = Utils.Array.removeElementAt(array, index);
    assert.deepEqual(result, expected);
    done();
  });

  it('index < 0',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'c'];
    const index = -1;
    const expected = Utils.cloneJSON(array);
    const result = Utils.Array.removeElementAt(array, index);
    assert.deepEqual(result, expected);
    done();
  });

  it('happy path',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'c'];
    const index = 1;
    const expected = ['a', 'c'];
    const result = Utils.Array.removeElementAt(array, index);
    assert.deepEqual(result, expected);
    done();
  });

  it('array is undefined',  (done) => { // eslint-disable-line
    try {
      const index = 1;
      Utils.Array.removeElementAt(null, index);
      done('SHOULD NOT GET HERE');
    } catch (err) {
      done();
    }
  });
});
