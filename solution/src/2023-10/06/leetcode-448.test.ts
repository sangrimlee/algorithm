import { findDisappearedNumbers } from './leetcode-448';

describe('2023-10-06: LeetCode 448', () => {
  test('Example 1', () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
  });
  test('Example 2', () => {
    expect(findDisappearedNumbers([1, 1])).toEqual([2]);
  });
});
