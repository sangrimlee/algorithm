import { getLongestSubsequence } from './leetcode-2900';

describe('2024-04-16: LeetCode 2900', () => {
  test('Example 1', () => {
    expect(getLongestSubsequence(['e', 'a', 'b'], [0, 0, 1])).toEqual(['e', 'b']);
  });
  test('Example 2', () => {
    expect(getLongestSubsequence(['a', 'b', 'c', 'd'], [1, 0, 1, 1])).toEqual(['a', 'b', 'c']);
  });
});
