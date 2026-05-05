function formatCurrency(amount, currency) {
  const symbols = {
    USD: '$',
    JPY: '¥',
    EUR: '€',
    GBP: '£'
  };
  
  const decimals = currency === 'JPY' ? 0 : 2;
  const symbol = symbols[currency] || '$';
  
  return symbol + amount.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
