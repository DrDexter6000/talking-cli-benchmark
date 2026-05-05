function formatCurrency(amount, currency) {
  return '$' + amount.toFixed(2);
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

module.exports = { formatCurrency, truncateText };
