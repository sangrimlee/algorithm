import { longestMonotonicSubarray } from './leetcode-3105';

describe('2024-05-07: LeetCode 3105', () => {
  test('Example 1', () => {
    expect(longestMonotonicSubarray([1, 4, 3, 3, 2])).toBe(2);
  });
  test('Example 2', () => {
    expect(longestMonotonicSubarray([3, 3, 3, 3])).toBe(1);
  });
  test('Example 3', () => {
    expect(longestMonotonicSubarray([3, 2, 1])).toBe(3);
  });
});
