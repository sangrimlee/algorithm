import { subsetXORSum } from './leetcode-1863';

describe('2024-01-02: LeetCode 1863', () => {
  test('Example 1', () => {
    expect(subsetXORSum([1, 3])).toBe(6);
  });
  test('Example 2', () => {
    expect(subsetXORSum([5, 1, 6])).toBe(28);
  });
  test('Example 3', () => {
    expect(subsetXORSum([3, 4, 5, 6, 7, 8])).toBe(480);
  });
});
