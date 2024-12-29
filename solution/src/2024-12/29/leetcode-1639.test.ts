import { numWays } from './leetcode-1639';

describe('2024-12-29: LeetCode 1639', () => {
  test('Example 1', () => {
    expect(numWays(['acca', 'bbbb', 'caca'], 'aba')).toBe(6);
  });
  test('Example 2', () => {
    expect(numWays(['abba', 'baab'], 'bab')).toBe(4);
  });
});
