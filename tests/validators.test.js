const { validateEmail } = require('../src/validators');

test('validateEmail checks format', () => {
  expect(validateEmail('test@example.com')).toBe(true);
  expect(validateEmail('invalid')).toBe(false);
});
