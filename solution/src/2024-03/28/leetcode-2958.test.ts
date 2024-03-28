import { maxSubarrayLength } from './leetcode-2958';

describe('2024-03-28: LeetCode 2958', () => {
  test('Example 1', () => {
    expect(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2)).toBe(6);
  });
  test('Example 2', () => {
    expect(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1)).toBe(2);
  });
  test('Example 3', () => {
    expect(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4)).toBe(4);
  });
});
