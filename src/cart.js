function calculateTotal(items) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const TAX_RATE = 0.08;
  return subtotal * (1 + TAX_RATE);
}

module.exports = { calculateTotal };
