import { longestDiverseString } from './leetcode-1405';

describe('2024-10-16: LeetCode 1405', () => {
  test('Example 1', () => {
    expect(longestDiverseString(1, 1, 7)).toBe('ccaccbcc');
  });
  test('Example 2', () => {
    expect(longestDiverseString(7, 1, 0)).toBe('aabaa');
  });
});
