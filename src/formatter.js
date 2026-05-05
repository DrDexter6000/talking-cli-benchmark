const CURRENCY_CONFIG = {
  JPY: { symbol: '¥', decimals: 0 }
};

function formatCurrency(amount, currency) {
  const config = CURRENCY_CONFIG[currency];
  if (config) {
    return config.symbol + amount.toFixed(config.decimals);
  }
  return '$' + amount.toFixed(2);
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  
  // Find the last space within the limit to break at word boundary
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastSpace === -1) {
    return truncated + '...';
  }
  
  return truncated.substring(0, lastSpace) + '...';
}

module.exports = { formatCurrency, truncateText };
