// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../..').utils;

const assert = chai.assert; //eslint-disable-line


// Our parent block
describe('Array: hashByField', () => { // eslint-disable-line


  it('happy path',  (done) => { // eslint-disable-line
    const input = [{ id: 'a', value: 'aa' }, { id: 'b', value: 'bb' }, { id: 'c', value: 'cc' }];
    const expected = {
      a: { id: 'a', value: 'aa' },
      b: { id: 'b', value: 'bb' },
      c: { id: 'c', value: 'cc' },
    };
    const result = Utils.Array.hashByField(input, 'id');
    assert.deepEqual(result, expected);
    done();
  });

  it('null entry: skip it',  (done) => { // eslint-disable-line
    const input = [{ id: 'a', value: 'aa' }, null, { id: 'b', value: 'bb' }, { id: 'c', value: 'cc' }];
    const expected = {
      a: { id: 'a', value: 'aa' },
      b: { id: 'b', value: 'bb' },
      c: { id: 'c', value: 'cc' },
    };
    const result = Utils.Array.hashByField(input, 'id');
    assert.deepEqual(result, expected);
    done();
  });

  it('field is not defined',  (done) => { // eslint-disable-line
    const input = [{ id: 'a', value: 'aa' }, { id: 'b', value: 'bb' }, { id: 'c', value: 'cc' }];
    try {
      Utils.Array.hashByField(input);
      done(new Error('SHOULD NOT GET HERE'));
    } catch (error) {
      assert.equal(error.message, 'field, property or key should be defined');
    }
    done();
  });

  it('array is undefined',  (done) => { // eslint-disable-line
    try {
      Utils.Array.hashByField(null, 'field');
      done(new Error('SHOULD NOT GET HERE'));
    } catch (error) {
      assert.equal(error.message, 'Cannot read property \'length\' of null');
    }
    done();
  });

});
