import { isSubsequence } from './leetcode-392';

describe('2023-07-17: LeetCode 392', () => {
  test('Example 1', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
  });
  test('Example 2', () => {
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
  });
});
