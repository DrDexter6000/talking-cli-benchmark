function formatDate(input) {
  if (typeof input === 'string') {
    return new Date(input).toLocaleDateString();
  }
  return input.toLocaleDateString();
}

function calculateDiscount(price, percent) {
  if (typeof price !== 'number' || price < 0) return 0;
  if (typeof percent !== 'number' || percent < 0 || percent > 100) return 0;
  return price * (percent / 100);
}

module.exports = { formatDate, calculateDiscount };
