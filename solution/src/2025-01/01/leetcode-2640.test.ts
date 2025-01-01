import { findPrefixScore } from './leetcode-2640';

describe('2025-01-01: LeetCode 2640', () => {
  test('Example 1', () => {
    expect(findPrefixScore([2, 3, 7, 5, 10])).toEqual([4, 10, 24, 36, 56]);
  });
  test('Example 2', () => {
    expect(findPrefixScore([1, 1, 2, 4, 8, 16])).toEqual([2, 4, 8, 16, 32, 64]);
  });
});
