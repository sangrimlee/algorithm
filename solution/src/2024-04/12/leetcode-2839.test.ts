import { canBeEqual } from './leetcode-2839';

describe('2024-04-12: LeetCode 2839', () => {
  test('Example 1', () => {
    expect(canBeEqual('abcd', 'cdab')).toBe(true);
  });
  test('Example 2', () => {
    expect(canBeEqual('abcd', 'dacb')).toBe(false);
  });
});
