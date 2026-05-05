function formatCurrency(amount, currency) {
  if (currency === 'JPY') {
    return '¥' + amount.toFixed(0);
  }
  return '$' + amount.toFixed(2);
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace === -1) return truncated + '...';
  return truncated.substring(0, lastSpace) + '...';
}

module.exports = { formatCurrency, truncateText };
