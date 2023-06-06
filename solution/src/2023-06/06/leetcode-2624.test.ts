import './leetcode-2624';

describe('2023-06-06: LeetCode 2624', () => {
  test('Example 1', () => {
    expect(
      [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15].snail(5, 4),
    ).toEqual([
      [19, 17, 16, 15],
      [10, 1, 14, 4],
      [3, 2, 12, 20],
      [7, 5, 18, 11],
      [9, 8, 6, 13],
    ]);
  });
  test('Example 2', () => {
    expect([1, 2, 3, 4].snail(1, 4)).toEqual([[1, 2, 3, 4]]);
  });
  test('Example 3', () => {
    expect([1, 3].snail(2, 2)).toEqual([]);
  });
});
