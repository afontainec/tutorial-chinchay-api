// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../..').utils;

const { assert } = chai;


// Our parent block
describe('Array: parseString', () => { // eslint-disable-line


  it('text is undef',  (done) => { // eslint-disable-line
    const result = Utils.Array.parseString();
    const expected = [];
    assert.deepEqual(result, expected);
    done();
  });

  it('text is json',  (done) => { // eslint-disable-line
    const result = Utils.Array.parseString('{"a": "b"}');
    const expected = [{ a: 'b' }];
    assert.deepEqual(result, expected);
    done();
  });

  it('text is array',  (done) => { // eslint-disable-line
    const result = Utils.Array.parseString('["a", "b"]');
    const expected = ['a', 'b'];
    assert.deepEqual(result, expected);
    done();
  });

  it('ans is text',  (done) => { // eslint-disable-line
    const result = Utils.Array.parseString('hola');
    const expected = ['hola'];
    assert.deepEqual(result, expected);
    done();
  });
});
