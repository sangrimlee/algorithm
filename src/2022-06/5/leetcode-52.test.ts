import { totalNQueens } from './leetcode-52';

describe('2022-06-04: LeetCode 51', () => {
  test('Example 1', () => {
    expect(totalNQueens(4)).toBe(2);
  });

  test('Example 2', () => {
    expect(totalNQueens(1)).toBe(1);
  });

  test('Example 3', () => {
    expect(totalNQueens(9)).toBe(352);
  });
});
