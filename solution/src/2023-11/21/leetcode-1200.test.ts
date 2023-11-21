import { minimumAbsDifference } from './leetcode-1200';

describe('2023-11-21: LeetCode 1200', () => {
  test('Example 1', () => {
    expect(minimumAbsDifference([4, 2, 1, 3])).toEqual([
      [1, 2],
      [2, 3],
      [3, 4],
    ]);
  });
  test('Example 2', () => {
    expect(minimumAbsDifference([1, 3, 6, 10, 15])).toEqual([[1, 3]]);
  });
  test('Example 3', () => {
    expect(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])).toEqual([
      [-14, -10],
      [19, 23],
      [23, 27],
    ]);
  });
});
