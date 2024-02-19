import { divisorSubstrings } from './leetcode-2269';

describe('2024-02-19: LeetCode 2269', () => {
  test('Example 1', () => {
    expect(divisorSubstrings(240, 2)).toBe(2);
  });
  test('Example 2', () => {
    expect(divisorSubstrings(430043, 2)).toBe(2);
  });
});
