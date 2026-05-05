const CURRENCY_CONFIG = {
  USD: { symbol: '$', decimals: 2 },
  JPY: { symbol: '¥', decimals: 0 },
  EUR: { symbol: '€', decimals: 2 },
};

function formatCurrency(amount, currency) {
  const config = CURRENCY_CONFIG[currency] || CURRENCY_CONFIG.USD;
  const formatted = amount.toFixed(config.decimals);
  return config.symbol + formatted;
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  if (maxLength < 3) return text.substring(0, maxLength);
  
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastSpace === -1 || lastSpace === 0) {
    return truncated + '...';
  }
  
  return truncated.substring(0, lastSpace) + '...';
}

module.exports = { formatCurrency, truncateText };
