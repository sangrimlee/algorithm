import { setZeroes } from './leetcode-73';

describe('2023-08-30: LeetCode 73', () => {
  test('Example 1', () => {
    const arr = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    setZeroes(arr);
    expect(arr).toEqual([
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ]);
  });
  test('Example 2', () => {
    const arr = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ];
    setZeroes(arr);
    expect(arr).toEqual([
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ]);
  });
  test('Example 3', () => {
    const arr = [[1, 0, 3]];
    setZeroes(arr);
    expect(arr).toEqual([[0, 0, 0]]);
  });
});
