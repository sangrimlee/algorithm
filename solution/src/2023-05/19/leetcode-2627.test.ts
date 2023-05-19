import { debounce } from './leetcode-2627';

jest.useFakeTimers();

describe('2023-05-19: LeetCode 2627', () => {
  it('execute once', () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn, 100);

    for (let i = 0; i < 10; i++) {
      debouncedFn();
    }

    jest.runAllTimers();

    expect(fn).toBeCalledTimes(1);
  });

  it('execute once', () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn, 100);

    debouncedFn();
    jest.advanceTimersByTime(50);

    debouncedFn();
    jest.runAllTimers();

    expect(fn).toBeCalledTimes(1);
  });
});
