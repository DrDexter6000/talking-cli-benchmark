const { debounce, formatDate } = require('../src/utils');

test('debounce delays execution', () => {
  jest.useFakeTimers();
  const fn = jest.fn();
  const debounced = debounce(fn, 100);
  debounced();
  expect(fn).not.toHaveBeenCalled();
  jest.advanceTimersByTime(100);
  expect(fn).toHaveBeenCalled();
});
