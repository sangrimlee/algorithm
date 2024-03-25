import { findDuplicates } from './leetcode-442';

describe('2024-03-25: LeetCode 442', () => {
  test('Example 1', () => {
    expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3]);
  });
  test('Example 2', () => {
    expect(findDuplicates([1, 1, 2])).toEqual([1]);
  });
  test('Example 3', () => {
    expect(findDuplicates([1])).toEqual([]);
  });
});
