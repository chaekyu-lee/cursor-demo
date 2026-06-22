const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const {
  extractEmails,
  isValidEmail,
  getValidEmails,
  uniqueValidEmails,
} = require('./email');

describe('extractEmails', () => {
  it('returns email addresses from members', () => {
    const members = [
      { name: 'John', email: 'john@example.com' },
      { name: 'Jane', email: 'invalid' },
    ];
    assert.deepEqual(extractEmails(members), ['john@example.com', 'invalid']);
  });

  it('returns empty array for non-array input', () => {
    assert.deepEqual(extractEmails(null), []);
    assert.deepEqual(extractEmails('not an array'), []);
  });
});

describe('isValidEmail', () => {
  it('returns true for valid emails', () => {
    assert.equal(isValidEmail('john@example.com'), true);
    assert.equal(isValidEmail('user.name+tag@domain.co.uk'), true);
  });

  it('returns false for invalid emails', () => {
    assert.equal(isValidEmail('invalid'), false);
    assert.equal(isValidEmail('missing@domain'), false);
    assert.equal(isValidEmail(null), false);
  });
});

describe('getValidEmails', () => {
  it('returns only valid email addresses', () => {
    const members = [
      { name: 'John', email: 'john@example.com' },
      { name: 'Jane', email: 'not-an-email' },
      { name: 'Jim', email: 'jim@example.com' },
    ];
    assert.deepEqual(getValidEmails(members), [
      'john@example.com',
      'jim@example.com',
    ]);
  });

  it('returns empty array when no valid emails exist', () => {
    const members = [{ name: 'Jane', email: 'bad' }];
    assert.deepEqual(getValidEmails(members), []);
  });
});

describe('uniqueValidEmails', () => {
  it('returns unique valid emails only', () => {
    const members = [
      { name: 'John', email: 'john@example.com' },
      { name: 'Jane', email: 'john@example.com' },
      { name: 'Jim', email: 'jim@example.com' },
      { name: 'Bad', email: 'not-an-email' },
    ];
    assert.deepEqual(uniqueValidEmails(members), [
      'john@example.com',
      'jim@example.com',
    ]);
  });

  it('returns empty array for non-array input', () => {
    assert.deepEqual(uniqueValidEmails(null), []);
  });
});
