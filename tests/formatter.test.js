const { formatCurrency, truncateText } = require('../src/formatter');

test('formats USD currency', () => {
  expect(formatCurrency(10.5, 'USD')).toBe('$10.50');
});

test('formats JPY currency without decimals', () => {
  expect(formatCurrency(1000, 'JPY')).toBe('¥1000');
  expect(formatCurrency(123456, 'JPY')).toBe('¥123456');
});

test('formats EUR currency', () => {
  expect(formatCurrency(50.99, 'EUR')).toBe('€50.99');
});

test('truncates long text', () => {
  expect(truncateText('hello world', 5)).toBe('hello...');
});

test('truncates text at word boundary', () => {
  expect(truncateText('hello world test', 11)).toBe('hello...');
  expect(truncateText('the quick brown fox', 10)).toBe('the quick...');
});

test('returns original text if shorter than maxLength', () => {
  expect(truncateText('hi', 10)).toBe('hi');
});

test('handles text with no spaces', () => {
  expect(truncateText('supercalifragilisticexpialidocious', 5)).toBe('super...');
});
