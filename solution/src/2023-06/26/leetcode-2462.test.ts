import { totalCost } from './leetcode-2462';

describe('2023-06-26: LeetCode 2462', () => {
  test('Example 1', () => {
    expect(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4)).toBe(11);
  });
  test('Example 2', () => {
    expect(totalCost([1, 2, 4, 1], 3, 3)).toBe(4);
  });
});
