const { formatCurrency, truncateText } = require('../src/formatter');

// --- formatCurrency tests ---

test('formats USD currency', () => {
  expect(formatCurrency(10.5, 'USD')).toBe('$10.50');
});

test('formats JPY currency with no decimals', () => {
  expect(formatCurrency(1000, 'JPY')).toBe('¥1000');
});

test('formats JPY currency rounds to integer', () => {
  expect(formatCurrency(1500.75, 'JPY')).toBe('¥1501');
});

test('formats JPY zero', () => {
  expect(formatCurrency(0, 'JPY')).toBe('¥0');
});

test('formats JPY large number', () => {
  expect(formatCurrency(1234567, 'JPY')).toBe('¥1234567');
});

test('formats USD defaults when no currency specified', () => {
  expect(formatCurrency(5)).toBe('$5.00');
});

test('formats USD with undefined currency', () => {
  expect(formatCurrency(99.99, undefined)).toBe('$99.99');
});

// --- truncateText tests ---

test('truncates long text', () => {
  expect(truncateText('hello world', 5)).toBe('hello...');
});

test('truncates at word boundary', () => {
  expect(truncateText('hello world test', 11)).toBe('hello...');
});

test('returns full text when shorter than maxLength', () => {
  expect(truncateText('hello', 10)).toBe('hello');
});

test('returns exact text when equal to maxLength', () => {
  expect(truncateText('hello', 5)).toBe('hello');
});

test('truncates single word without space', () => {
  expect(truncateText('supercalifragilistic', 10)).toBe('superc...');
});

test('handles multiple spaces between words', () => {
  expect(truncateText('one  two  three', 8)).toBe('one...');
});

test('truncates to first word boundary', () => {
  expect(truncateText('hello beautiful world', 10)).toBe('hello...');
});

test('handles very small maxLength', () => {
  expect(truncateText('hello world', 2)).toBe('...');
});

test('handles empty string', () => {
  expect(truncateText('', 5)).toBe('');
});
