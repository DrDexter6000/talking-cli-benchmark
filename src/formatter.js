function formatCurrency(amount, currency) {
  if (currency === 'JPY') {
    return '¥' + amount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return '$' + amount.toFixed(2);
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  // Find the last space before maxLength to break at word boundary
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + '...';
  }
  return truncated + '...';
}

module.exports = { formatCurrency, truncateText };
