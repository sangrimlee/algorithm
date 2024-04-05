import { longestAlternatingSubarray } from './leetcode-2760';

describe('2024-04-05: LeetCode 2760', () => {
  test('Example 1', () => {
    expect(longestAlternatingSubarray([3, 2, 5, 4], 5)).toBe(3);
  });
  test('Example 2', () => {
    expect(longestAlternatingSubarray([1, 2], 2)).toBe(1);
  });
  test('Example 3', () => {
    expect(longestAlternatingSubarray([2, 3, 4, 5], 4)).toBe(3);
  });
});
