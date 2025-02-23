import { longestSubarray } from './1493';

describe('LeetCode 1493', () => {
  test('Example 1', () => {
    expect(longestSubarray([1, 1, 0, 1])).toBe(3);
  });
  test('Example 2', () => {
    expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])).toBe(5);
  });
  test('Example 3', () => {
    expect(longestSubarray([1, 1, 1])).toBe(2);
  });
});
