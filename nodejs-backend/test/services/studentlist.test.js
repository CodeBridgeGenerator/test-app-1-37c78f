const assert = require('assert');
const app = require('../../src/app');

describe('\'studentlist\' service', () => {
  it('registered the service', () => {
    const service = app.service('studentlist');

    assert.ok(service, 'Registered the service (studentlist)');
  });
});
