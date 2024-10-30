import { minimumMountainRemovals } from './leetcode-1671';

describe('2024-10-30: LeetCode 1671', () => {
  test('Example 1', () => {
    expect(minimumMountainRemovals([1, 3, 1])).toBe(0);
  });
  test('Example 2', () => {
    expect(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1])).toBe(3);
  });
});
