import { minSubarray } from './leetcode-1590';

describe('2024-10-03: LeetCode 1590', () => {
  test('Example 1', () => {
    expect(minSubarray([3, 1, 4, 2], 6)).toBe(1);
  });
  test('Example 2', () => {
    expect(minSubarray([6, 3, 5, 2], 9)).toBe(2);
  });
  test('Example 3', () => {
    expect(minSubarray([1, 2, 3], 3)).toBe(0);
  });
});
