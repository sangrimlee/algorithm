import { longestSubarray } from './2419';

describe('LeetCode 2419', () => {
  test('Example 1', () => {
    expect(longestSubarray([1, 2, 3, 3, 2, 2])).toBe(2);
  });
  test('Example 2', () => {
    expect(longestSubarray([1, 2, 3, 4])).toBe(1);
  });
});
