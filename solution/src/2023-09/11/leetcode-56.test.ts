import { merge } from './leetcode-56';

describe('2023-09-11: LeetCode 56', () => {
  test('Example 1', () => {
    expect(
      merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ]),
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });
  test('Example 2', () => {
    expect(
      merge([
        [1, 4],
        [4, 5],
      ]),
    ).toEqual([[1, 5]]);
  });
});
