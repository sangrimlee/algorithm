import { pathInZigZagTree } from './leetcode-1104';

describe('2024-06-13: LeetCode 1104', () => {
  test('Example 1', () => {
    expect(pathInZigZagTree(14)).toEqual([1, 3, 4, 14]);
  });
  test('Example 2', () => {
    expect(pathInZigZagTree(26)).toEqual([1, 2, 6, 10, 26]);
  });
});
