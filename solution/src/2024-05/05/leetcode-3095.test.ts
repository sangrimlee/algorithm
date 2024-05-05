import { minimumSubarrayLength } from './leetcode-3095';

describe('2024-05-05: LeetCode 3095', () => {
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
