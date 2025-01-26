import { maximumInvitations } from './leetcode-2127';

describe('2025-01-26: LeetCode 2127', () => {
  test('Example 1', () => {
    expect(maximumInvitations([2, 2, 1, 2])).toBe(3);
  });
  test('Example 2', () => {
    expect(maximumInvitations([1, 2, 0])).toBe(3);
  });
  test('Example 3', () => {
    expect(maximumInvitations([3, 0, 1, 4, 1])).toBe(4);
  });
});
