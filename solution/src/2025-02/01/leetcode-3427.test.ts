import { subarraySum } from './leetcode-3427';

describe('2025-02-01: LeetCode 3427', () => {
  test('Example 1', () => {
    expect(subarraySum([2, 3, 1])).toBe(11);
  });
  test('Example 2', () => {
    expect(subarraySum([3, 1, 1, 2])).toBe(13);
  });
});
