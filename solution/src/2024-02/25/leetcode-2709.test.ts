import { canTraverseAllPairs } from './leetcode-2709';

describe('2024-02-25: LeetCode 2709', () => {
  test('Example 1', () => {
    expect(canTraverseAllPairs([2, 3, 6])).toBe(true);
  });
  test('Example 2', () => {
    expect(canTraverseAllPairs([3, 9, 5])).toBe(false);
  });
  test('Example 3', () => {
    expect(canTraverseAllPairs([4, 3, 12, 8])).toBe(true);
  });
});
