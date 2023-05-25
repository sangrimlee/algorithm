import { chunk } from './leetcode-2677';

describe('2023-05-25: LeetCode 2677', () => {
  test('Example 1', () => {
    expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]]);
  });
  test('Example 2', () => {
    expect(chunk([1, 9, 6, 3, 2], 3)).toEqual([
      [1, 9, 6],
      [3, 2],
    ]);
  });
  test('Example 3', () => {
    expect(chunk([8, 5, 3, 2, 6], 6)).toEqual([[8, 5, 3, 2, 6]]);
  });
  test('Example 4', () => {
    expect(chunk([], 1)).toEqual([]);
  });
});
