const { formatDate, calculateDiscount } = require('../src/date-helpers');

test('formatDate handles string input', () => {
  expect(formatDate('2026-01-15')).toBeTruthy();
});

test('calculateDiscount validates inputs', () => {
  expect(calculateDiscount(-10, 10)).toBe(0);
  expect(calculateDiscount(100, 150)).toBe(0);
});
