import { findPeaks } from './2951';

describe('LeetCode 2951', () => {
  test('Example 1', () => {
    expect(findPeaks([2, 4, 4])).toEqual([]);
  });
  test('Example 2', () => {
    expect(findPeaks([1, 4, 3, 8, 5])).toEqual([1, 3]);
  });
});
