import { getOrder } from './leetcode-1834';

describe('2022-12-29: LeetCode 1834', () => {
  test('Example 1', () => {
    const tasks = [
      [1, 2],
      [2, 4],
      [3, 2],
      [4, 1],
    ];
    expect(getOrder(tasks)).toEqual([0, 2, 3, 1]);
  });

  test('Example 2', () => {
    const tasks = [
      [7, 10],
      [7, 12],
      [7, 5],
      [7, 4],
      [7, 2],
    ];
    expect(getOrder(tasks)).toEqual([4, 3, 2, 0, 1]);
  });
});
