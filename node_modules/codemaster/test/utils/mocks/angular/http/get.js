// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const { assert } = require('chai');
const { utils } = require('../../../../..');

const { $http } = utils.mocks.angular;


// Our parent block
describe('Utils: mock $http get', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('get happy path', async () => { // eslint-disable-line no-undef
    const result = await $http.get('http://rick.accionet.net');
    const expected = '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <title>Accionet</title>\n</head>\n\n<body>\n  WABBALABADUBDUB!!\n</body>\n\n</html>\n';
    assert.equal(result.data, expected);
  });

  it('get unexisting url', (done) => { // eslint-disable-line no-undef
    $http.get('/not/exist').then(() => {
      done(new Error('Should not get here'));
    }).catch(() => {
      done();

    });
  });
});
