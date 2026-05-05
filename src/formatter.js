function formatCurrency(amount, currency) {
  if (currency === 'JPY') {
    return '¥' + Math.round(amount).toLocaleString('en-US');
  }
  return '$' + amount.toFixed(2);
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;

  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  if (lastSpace > 0) {
    return text.substring(0, lastSpace) + '...';
  }
  return truncated + '...';
}

module.exports = { formatCurrency, truncateText };
