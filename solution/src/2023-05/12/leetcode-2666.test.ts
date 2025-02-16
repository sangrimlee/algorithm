import { once } from './leetcode-2666';

describe('2023-05-12: LeetCode 2666', () => {
  test('Example 1', () => {
    const mockFn = jest.fn();
    const returnValue = 1;
    mockFn.mockReturnValue(returnValue);

    const onceFn = once(mockFn);
    expect(onceFn(1)).toBe(returnValue);
    expect(onceFn(2)).toBeUndefined();
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(1);
  });

  test('Example 2', () => {
    const fn = (a: number, b: number, c: number) => a + b + c;

    const onceFn = once(fn);
    expect(onceFn(1, 2, 3)).toBe(6);
    expect(onceFn(4, 5, 6)).toBeUndefined();
  });

  test('Example 3', () => {
    const fn = (a: number, b: number, c: number) => a * b * c;

    const onceFn = once(fn);
    expect(onceFn(5, 7, 4)).toBe(140);
    expect(onceFn(2, 3, 6)).toBeUndefined();
    expect(onceFn(4, 6, 8)).toBeUndefined();
  });
});
