import { smallestDistancePair } from './leetcode-719';

describe('2024-08-14: LeetCode 719', () => {
  test('Example 1', () => {
    expect(smallestDistancePair([1, 3, 1], 1)).toBe(0);
  });
  test('Example 2', () => {
    expect(smallestDistancePair([1, 1, 1], 2)).toBe(0);
  });
  test('Example 3', () => {
    expect(smallestDistancePair([1, 6, 1], 3)).toBe(5);
  });
});
