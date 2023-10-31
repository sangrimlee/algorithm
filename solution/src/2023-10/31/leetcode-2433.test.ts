import { findArray } from './leetcode-2433';

describe('2023-10-31: LeetCode 2433', () => {
  test('Example 1', () => {
    expect(findArray([5, 2, 0, 3, 1])).toEqual([5, 7, 2, 3, 2]);
  });
  test('Example 2', () => {
    expect(findArray([13])).toEqual([13]);
  });
});
