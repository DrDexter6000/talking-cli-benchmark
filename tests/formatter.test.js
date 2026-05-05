const { formatCurrency, truncateText } = require('../src/formatter');

test('formats USD currency', () => {
  expect(formatCurrency(10.5, 'USD')).toBe('$10.50');
});

test('formats JPY currency without decimals', () => {
  expect(formatCurrency(1000, 'JPY')).toBe('¥1,000');
});

test('formats large JPY amounts with comma separators', () => {
  expect(formatCurrency(1000000, 'JPY')).toBe('¥1,000,000');
});

test('truncates long text', () => {
  expect(truncateText('hello world', 5)).toBe('hello...');
});

test('truncates at word boundary', () => {
  expect(truncateText('hello world test', 11)).toBe('hello...');
});

test('returns original text if within maxLength', () => {
  expect(truncateText('hi', 10)).toBe('hi');
});

test('handles text with no spaces', () => {
  expect(truncateText('superlongword', 5)).toBe('super...');
});
