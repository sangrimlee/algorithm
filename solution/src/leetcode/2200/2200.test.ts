import { findKDistantIndices } from './2200';

describe('LeetCode 2200', () => {
  test('Example 1', () => {
    expect(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test('Example 2', () => {
    expect(findKDistantIndices([2, 2, 2, 2, 2], 2, 2)).toEqual([0, 1, 2, 3, 4]);
  });
});
