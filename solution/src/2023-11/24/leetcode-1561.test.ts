import { maxCoins } from './leetcode-1561';

describe('2023-11-24: LeetCode 1561', () => {
  test('Example 1', () => {
    expect(maxCoins([2, 4, 1, 2, 7, 8])).toBe(9);
  });
  test('Example 2', () => {
    expect(maxCoins([2, 4, 5])).toBe(4);
  });
  test('Example 3', () => {
    expect(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4])).toBe(18);
  });
});
