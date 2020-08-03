// During the test the env variable is set to test
process.env.NODE_ENV = 'test';


// Require the dev-dependencies
const chai = require('chai');
const { template } = require('../../');


const { assert } = chai;


// Our parent block
describe('Template: Compile string', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('Compile string', (done) => { // eslint-disable-line no-undef
    const string = template.compile(' $TEST$ string', { TEST: 'compile' });
    assert.equal(string, ' compile string');
    done();
  });

  it('Compile string with repetition', (done) => { // eslint-disable-line no-undef
    const string = template.compile(' $TEST$ string $TEST$', { TEST: 'compile' });
    assert.equal(string, ' compile string compile');
    done();
  });

  it('string is null', (done) => { // eslint-disable-line no-undef
    const string = template.compile(null, { TEST: 'compile' });
    assert.isNull(string);
    done();
  });

  it('values is null', (done) => { // eslint-disable-line no-undef
    const string = template.compile(' compile string', null);
    assert.equal(string, ' compile string');
    done();
  });
});
