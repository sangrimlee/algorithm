import { findPeaks } from './leetcode-2951';

describe('2024-04-22: LeetCode 2951', () => {
  test('Example 1', () => {
    expect(findPeaks([2, 4, 4])).toEqual([]);
  });
  test('Example 2', () => {
    expect(findPeaks([1, 4, 3, 8, 5])).toEqual([1, 3]);
  });
});
