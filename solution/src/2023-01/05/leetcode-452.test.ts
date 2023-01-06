import { findMinArrowShots } from './leetcode-452';

describe('2023-01-05: LeetCode 452', () => {
  test('Example 1', () => {
    const points = [
      [10, 16],
      [2, 8],
      [1, 6],
      [7, 12],
    ];
    expect(findMinArrowShots(points)).toBe(2);
  });

  test('Example 2', () => {
    const points = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];
    expect(findMinArrowShots(points)).toBe(4);
  });

  test('Example 3', () => {
    const points = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ];
    expect(findMinArrowShots(points)).toBe(2);
  });
});
