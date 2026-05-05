const { calculateTotal } = require('../src/cart');

test('calculates total with tax', () => {
  const items = [{ price: 10, qty: 2 }];
  expect(calculateTotal(items)).toBeCloseTo(21.6, 1);
});
