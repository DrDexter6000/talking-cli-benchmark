function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

module.exports = { debounce, formatDate };
