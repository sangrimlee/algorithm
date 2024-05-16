import { findPermutationDifference } from './leetcode-3146';

describe('2024-05-16: LeetCode 3146', () => {
  test('Example 1', () => {
    expect(findPermutationDifference('abc', 'bac')).toBe(2);
  });
  test('Example 2', () => {
    expect(findPermutationDifference('abcde', 'edbac')).toBe(12);
  });
});
