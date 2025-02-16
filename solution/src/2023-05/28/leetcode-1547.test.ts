import { minCost } from './leetcode-1547';

describe('2023-05-28: LeetCode 1547', () => {
  test('Example 1', () => {
    expect(minCost(7, [1, 3, 4, 5])).toBe(16);
  });

  test('Example 2', () => {
    expect(minCost(9, [5, 6, 1, 4, 2])).toBe(22);
  });
});
