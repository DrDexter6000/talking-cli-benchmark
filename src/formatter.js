function formatCurrency(amount, currency) {
  const currencyConfig = {
    USD: { symbol: '$', decimals: 2 },
    JPY: { symbol: '¥', decimals: 0, useLocale: true }
  };

  const config = currencyConfig[currency] || currencyConfig.USD;

  if (config.useLocale) {
    return config.symbol + Math.round(amount).toLocaleString('en-US');
  }
  return config.symbol + amount.toFixed(config.decimals);
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;

  // Leave room for the '...' suffix (3 chars)
  const availableLength = maxLength - 3;
  if (availableLength <= 0) return '...';

  // Find the last space within the available character limit
  const truncated = text.substring(0, availableLength);
  const lastSpace = truncated.lastIndexOf(' ');

  if (lastSpace > 0) {
    // Break at the last complete word boundary
    return truncated.substring(0, lastSpace) + '...';
  }

  // No space found, just truncate at the limit
  return truncated + '...';
}

module.exports = { formatCurrency, truncateText };
