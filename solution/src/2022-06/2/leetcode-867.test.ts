import { transpose } from './leetcode-867';

describe('2022-06-02: LeetCode 867', () => {
  test('Example 1', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    expect(transpose(matrix)).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]);
  });

  test('Example 2', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];

    expect(transpose(matrix)).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });
});
