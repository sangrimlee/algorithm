import { minCostToMoveChips } from './leetcode-1217';

describe('2023-11-21: LeetCode 1217', () => {
  test('Example 1', () => {
    expect(minCostToMoveChips([1, 2, 3])).toBe(1);
  });
  test('Example 2', () => {
    expect(minCostToMoveChips([2, 2, 2, 3, 3])).toBe(2);
  });
  test('Example 3', () => {
    expect(minCostToMoveChips([1, 1000000000])).toBe(1);
  });
});
