// During the test the env variable is set to test
process.env.NODE_ENV = 'test';


// Require the dev-dependencies
const chai = require('chai');
const path = require('path');
const { template } = require('../../');


const { assert } = chai;

const filePath = path.join(__dirname, 'test.txt');


// Our parent block
describe('Template: Compile string', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('happy path', async () => { // eslint-disable-line no-undef
    const string = await template.compileFile(filePath, { TEST: 'compile' });
    assert.equal(string, ' compile string');
  });

  it('unexistant file', (done) => { // eslint-disable-line no-undef
    template.compileFile('$TEST$ string $TEST$', { TEST: 'compile' }).then(() => {
      done('Should not get here');
    }).catch(() => {
      done();
    });
  });
});
