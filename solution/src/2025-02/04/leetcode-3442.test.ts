import { maxDifference } from './leetcode-3442';

describe('2025-02-04: LeetCode 3442', () => {
  test('Example 1', () => {
    expect(maxDifference('aaaaabbc')).toBe(3);
  });
  test('Example 2', () => {
    expect(maxDifference('abcabcab')).toBe(1);
  });
});
