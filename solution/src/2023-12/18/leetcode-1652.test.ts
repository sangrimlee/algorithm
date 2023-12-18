import { decrypt } from './leetcode-1652';

describe('2023-12-18: LeetCode 1652', () => {
  test('Example 1', () => {
    expect(decrypt([5, 7, 1, 4], 3)).toEqual([12, 10, 16, 13]);
  });
  test('Example 2', () => {
    expect(decrypt([1, 2, 3, 4], 0)).toEqual([0, 0, 0, 0]);
  });
  test('Example 3', () => {
    expect(decrypt([2, 4, 9, 3], -2)).toEqual([12, 5, 6, 13]);
  });
});
