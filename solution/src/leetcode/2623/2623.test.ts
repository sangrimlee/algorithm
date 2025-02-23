import { memoize } from './2623';

describe('LeetCode 2623', () => {
  test('Example 1', () => {
    const sum = jest.fn((a: number, b: number) => a + b);
    const memoizedSum = memoize(sum);
    expect(memoizedSum(2, 2)).toBe(4);
    expect(memoizedSum(2, 2)).toBe(4);
    expect(sum).toHaveBeenCalledTimes(1);
    expect(memoizedSum(1, 2)).toBe(3);
    expect(sum).toHaveBeenCalledTimes(2);
  });
});
