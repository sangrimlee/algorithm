import { throttle } from './2676';

describe('LeetCode 2676', () => {
  jest.useFakeTimers();

  test('Example 1', () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 100);

    /* 50 */
    jest.advanceTimersByTime(50);
    throttled(1);

    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('Example 2', () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 50);

    /* 50 */
    jest.advanceTimersByTime(50);
    throttled(1);

    /* 75 */
    jest.advanceTimersByTime(25);
    throttled(2);
    expect(fn).toHaveBeenCalledTimes(1);

    /* 100 */
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(2);
  });

  test('Example 3', () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 70);

    /* 50 */
    jest.advanceTimersByTime(50);
    throttled(1);

    /* 75 */
    jest.advanceTimersByTime(25);
    throttled(2);
    expect(fn).toHaveBeenCalledTimes(1);

    /* 90 */
    jest.advanceTimersByTime(15);
    throttled(8);

    /* 120 */
    jest.advanceTimersByTime(30);
    expect(fn).toHaveBeenCalledTimes(2);

    /* 140 */
    jest.advanceTimersByTime(20);
    throttled(5, 7);

    /* 190 */
    jest.advanceTimersByTime(50);
    expect(fn).toHaveBeenCalledTimes(3);

    /* 300 */
    jest.advanceTimersByTime(110);
    throttled(9, 4);

    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(4);
  });
});
