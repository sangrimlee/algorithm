import { similarPairs } from './leetcode-2506';

describe('2024-03-12: LeetCode 2506', () => {
  test('Example 1', () => {
    expect(similarPairs(['aba', 'aabb', 'abcd', 'bac', 'aabc'])).toBe(2);
  });

  test('Example 2', () => {
    expect(similarPairs(['aabb', 'ab', 'ba'])).toBe(3);
  });

  test('Example 3', () => {
    expect(similarPairs(['nba', 'cba', 'dba'])).toBe(0);
  });
});
