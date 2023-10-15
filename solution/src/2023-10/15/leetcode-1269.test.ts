import { numWays } from './leetcode-1269';

describe('2023-10-15: LeetCode 1269', () => {
  test('Example 1', () => {
    expect(numWays(3, 2)).toBe(4);
  });
  test('Example 2', () => {
    expect(numWays(2, 4)).toBe(2);
  });
  test('Example 3', () => {
    expect(numWays(4, 2)).toBe(8);
  });
});
