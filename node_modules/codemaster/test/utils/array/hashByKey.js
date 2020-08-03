// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../..').utils;

const assert = chai.assert; //eslint-disable-line


// Our parent block
describe('Array: hashByKey', () => { // eslint-disable-line


  it('happy path',  (done) => { // eslint-disable-line
    const input = [{ id: 'a', value: 'aa' }, { id: 'b', value: 'bb' }, { id: 'c', value: 'cc' }];
    const expected = {
      a: { id: 'a', value: 'aa' },
      b: { id: 'b', value: 'bb' },
      c: { id: 'c', value: 'cc' },
    };
    const result = Utils.Array.hashByKey(input, 'id');
    assert.deepEqual(result, expected);
    done();
  });

});
