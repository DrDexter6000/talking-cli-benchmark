const { slugify } = require('../src/slugify');

test('slugifies text', () => {
  expect(slugify('Hello World')).toBe('hello-world');
  expect(slugify('  Test  ')).toBe('test');
});
