import { maxAdjacentDistance } from './leetcode-3423';

describe('2025-01-24: LeetCode 3423', () => {
  test('Example 1', () => {
    expect(maxAdjacentDistance([1, 2, 4])).toBe(3);
  });
  test('Example 2', () => {
    expect(maxAdjacentDistance([-5, -10, -5])).toBe(5);
  });
});
