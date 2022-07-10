import { minCostClimbingStairs } from './leetcode-746';

describe('2022-07-10: LeetCode 746', () => {
  test('Example 1', () => {
    expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
  });

  test('Example 2', () => {
    expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
  });
});
