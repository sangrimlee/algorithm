import { longestSubarray } from './leetcode-1438';

describe('2024-06-23: LeetCode 1438', () => {
  test('Example 1', () => {
    expect(longestSubarray([8, 2, 4, 7], 4)).toBe(2);
  });
  test('Example 2', () => {
    expect(longestSubarray([10, 1, 2, 4, 7, 2], 5)).toBe(4);
  });
  test('Example 3', () => {
    expect(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0)).toBe(3);
  });
});
