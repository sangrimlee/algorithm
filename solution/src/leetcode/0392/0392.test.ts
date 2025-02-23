import { isSubsequence } from './0392';

describe('LeetCode 0392', () => {
  test('Example 1', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
  });
  test('Example 2', () => {
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
  });
});
