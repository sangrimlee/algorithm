import { countPairs } from './leetcode-2176';

describe('2024-02-08: LeetCode 2176', () => {
  test('Example 1', () => {
    expect(countPairs([3, 1, 2, 2, 2, 1, 3], 2)).toBe(4);
  });
  test('Example 2', () => {
    expect(countPairs([1, 2, 3, 4], 1)).toBe(0);
  });
});
