import { getLongestSubsequence } from './2900';

describe('LeetCode 2900', () => {
  test('Example 1', () => {
    expect(getLongestSubsequence(['e', 'a', 'b'], [0, 0, 1])).toEqual(['e', 'b']);
  });
  test('Example 2', () => {
    expect(getLongestSubsequence(['a', 'b', 'c', 'd'], [1, 0, 1, 1])).toEqual(['a', 'b', 'c']);
  });
});
