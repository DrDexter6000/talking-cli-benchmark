function formatCurrency(amount, currency) {
  if (currency === 'JPY') {
    return '¥' + amount.toLocaleString('en-US', { maximumFractionDigits: 0 });
  }
  return '$' + amount.toFixed(2);
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  // Find the last space before maxLength to break at word boundary
  const lastSpace = text.lastIndexOf(' ', maxLength);
  if (lastSpace === -1) {
    return text.substring(0, maxLength) + '...';
  }
  return text.substring(0, lastSpace) + '...';
}

module.exports = { formatCurrency, truncateText };
