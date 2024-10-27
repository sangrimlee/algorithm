import { findXSum } from './leetcode-3318';

describe('2024-10-27: LeetCode 3318', () => {
  test('Example 1', () => {
    expect(findXSum([1, 1, 2, 2, 3, 4, 2, 3], 6, 2)).toEqual([6, 10, 12]);
  });
  test('Example 2', () => {
    expect(findXSum([3, 8, 7, 8, 7, 5], 2, 2)).toEqual([11, 15, 15, 15, 12]);
  });
});
