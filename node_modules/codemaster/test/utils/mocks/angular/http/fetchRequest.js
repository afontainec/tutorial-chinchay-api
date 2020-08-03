// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const { assert } = require('chai');
const { utils } = require('../../../../..');

const { $http } = utils.mocks.angular;


// Our parent block
describe('Utils: mock $http fetch Request ', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('Success', async () => { // eslint-disable-line no-undef
    const request = new Promise((resolve) => {
      resolve({ a: 'a' });
    });
    const result = await $http.fetchRequest(request);
    assert.deepEqual(result, { a: 'a' });
  });

  it('Catch', async () => { // eslint-disable-line no-undef
    const request = new Promise((reject) => {
      const error = new Error();
      error.code = 400;
      error.getBody = () => {
        return { error: 'a' };
      };
      reject(error);
    });
    $http.fetchRequest(request).then().catch((err) => {
      assert.equal(err.status, 400);
      assert.deepEqual(err.data, { error: 'a' });
    });
  });
});
