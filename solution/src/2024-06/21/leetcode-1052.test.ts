import { maxSatisfied } from './leetcode-1052';

describe('2024-06-21: LeetCode 1052', () => {
  test('Example 1', () => {
    expect(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)).toBe(16);
  });
  test('Example 2', () => {
    expect(maxSatisfied([1], [0], 1)).toBe(1);
  });
});
