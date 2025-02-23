import { debounce } from './2627';

jest.useFakeTimers();

describe('LeetCode 2627', () => {
  test('Example 1', () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn, 100);

    for (let i = 0; i < 10; i++) {
      debouncedFn();
    }

    jest.runAllTimers();

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('Example 2', () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn, 100);

    debouncedFn();
    jest.advanceTimersByTime(50);

    debouncedFn();
    jest.runAllTimers();

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
