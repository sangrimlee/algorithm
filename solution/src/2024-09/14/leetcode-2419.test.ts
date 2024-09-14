import { longestSubarray } from './leetcode-2419';

describe('2024-09-14: LeetCode 2419', () => {
  test('Example 1', () => {
    expect(longestSubarray([1, 2, 3, 3, 2, 2])).toBe(2);
  });
  test('Example 2', () => {
    expect(longestSubarray([1, 2, 3, 4])).toBe(1);
  });
});
