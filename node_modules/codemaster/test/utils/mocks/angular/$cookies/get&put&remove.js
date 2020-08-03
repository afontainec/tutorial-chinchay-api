// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const { assert } = require('chai');
const { utils } = require('../../../../..');

const { $cookies } = utils.mocks.angular;


// Our parent block
describe('Utils: mock $cookies', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('add cookie without options', async () => { // eslint-disable-line no-undef
    $cookies.put('key', 'value');
    const result = $cookies.get('key');
    assert.equal(result, 'value');
  });

  it('remove cookey', async () => { // eslint-disable-line no-undef
    $cookies.remove('key');
    const result = $cookies.get('key');
    assert.equal(result, undefined);
  });

  it('add cookie without options.expires', async () => { // eslint-disable-line no-undef
    $cookies.put('key2', 'value2', {});
    const result = $cookies.get('key2');
    assert.equal(result, 'value2');
  });

  it('add expired cookie ', async () => { // eslint-disable-line no-undef
    const yesterday = new Date().getTime() - 24 * 60 * 60 * 1000;
    $cookies.put('key3', 'value3', { expires: yesterday });
    const result = $cookies.get('key3');
    assert.isUndefined(result);
  });

  it('add cookie with unexpired expires', async () => { // eslint-disable-line no-undef
    const tomorrow = new Date().getTime() + 24 * 60 * 60 * 1000;
    $cookies.put('key4', 'value4', { expires: tomorrow });
    const result = $cookies.get('key4');
    assert.equal(result, 'value4');
  });


  it('get unexistant key', async () => { // eslint-disable-line no-undef
    const result = $cookies.get('unexistant');
    assert.isUndefined(result);
  });

});
