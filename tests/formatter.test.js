const { formatCurrency, truncateText } = require('../src/formatter');

test('formats USD currency', () => {
  expect(formatCurrency(10.5, 'USD')).toBe('$10.50');
});

test('formats JPY currency without decimals', () => {
  expect(formatCurrency(1000, 'JPY')).toBe('¥1,000');
});

test('formats small JPY amount', () => {
  expect(formatCurrency(500, 'JPY')).toBe('¥500');
});

test('formats large JPY amount with thousands separator', () => {
  expect(formatCurrency(1234567, 'JPY')).toBe('¥1,234,567');
});

test('truncates long text', () => {
  expect(truncateText('hello world', 5)).toBe('hello...');
});

test('truncates at word boundary', () => {
  expect(truncateText('hello world test', 11)).toBe('hello...');
});

test('returns full text when shorter than maxLength', () => {
  expect(truncateText('short', 10)).toBe('short');
});

test('returns full text when equal to maxLength', () => {
  expect(truncateText('exact', 5)).toBe('exact');
});

test('truncates at single word boundary', () => {
  expect(truncateText('one two three four', 10)).toBe('one two...');
});

test('handles text without spaces', () => {
  expect(truncateText('superlongword', 5)).toBe('super...');
});
