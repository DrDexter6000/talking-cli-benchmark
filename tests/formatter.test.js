const { formatCurrency, truncateText } = require('../src/formatter');

test('formats USD currency', () => {
  expect(formatCurrency(10.5, 'USD')).toBe('$10.50');
});

test('truncates long text', () => {
  expect(truncateText('hello world', 5)).toBe('hello...');
});

test('formats JPY currency without decimals', () => {
  expect(formatCurrency(1000, 'JPY')).toBe('¥1,000');
});

test('formats JPY with large numbers', () => {
  expect(formatCurrency(1000000, 'JPY')).toBe('¥1,000,000');
});

test('truncates text at word boundary', () => {
  expect(truncateText('hello world test', 11)).toBe('hello...');
});

test('truncates text at complete word', () => {
  expect(truncateText('The quick brown fox', 14)).toBe('The quick...');
});

test('truncates text with no spaces', () => {
  expect(truncateText('superlongword', 5)).toBe('super...');
});
