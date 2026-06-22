const { uniqueValidEmails } = require('./email');

const members = [
  { name: 'John', email: 'john@example.com' },
  { name: 'Jane', email: 'jane@example.com' },
  { name: 'Jim', email: 'jim@example.com' },
];

console.log(uniqueValidEmails(members));
