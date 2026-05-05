const { formatCurrency, truncateText } = require('../src/formatter');

test('formats USD currency', () => {
  expect(formatCurrency(10.5, 'USD')).toBe('$10.50');
});

test('truncates long text', () => {
  expect(truncateText('hello world', 5)).toBe('hello...');
});
