import { minimumSubarrayLength } from './leetcode-3097';

describe('2024-11-11: LeetCode 3097', () => {
  test('Example 1', () => {
    expect(minimumSubarrayLength([1, 2, 3], 2)).toBe(1);
  });
  test('Example 2', () => {
    expect(minimumSubarrayLength([2, 1, 8], 10)).toBe(3);
  });
  test('Example 3', () => {
    expect(minimumSubarrayLength([1, 2], 0)).toBe(1);
  });
});
