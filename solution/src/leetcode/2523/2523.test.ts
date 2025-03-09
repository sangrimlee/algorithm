import { closestPrimes } from './2523';

describe('LeetCode 2523', () => {
  test('Example 1', () => {
    expect(closestPrimes(10, 19)).toEqual([11, 13]);
  });
  test('Example 2', () => {
    expect(closestPrimes(4, 6)).toEqual([-1, -1]);
  });
});
