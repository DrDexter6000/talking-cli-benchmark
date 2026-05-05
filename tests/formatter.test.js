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

test('formats JPY currency with zero decimal places', () => {
  expect(formatCurrency(1234.56, 'JPY')).toBe('¥1,235');
});

test('truncates text at word boundary', () => {
  expect(truncateText('hello world test', 11)).toBe('hello...');
});

test('truncates text with no spaces within limit', () => {
  expect(truncateText('helloworld', 5)).toBe('hello...');
});

test('returns original text if within limit', () => {
  expect(truncateText('hi', 10)).toBe('hi');
});
