import { minTimeToVisitAllPoints } from './leetcode-1266';

describe('2023-11-23: LeetCode 1266', () => {
  test('Example 1', () => {
    expect(
      minTimeToVisitAllPoints([
        [1, 1],
        [3, 4],
        [-1, 0],
      ]),
    ).toBe(7);
  });
  test('Example 2', () => {
    expect(
      minTimeToVisitAllPoints([
        [3, 2],
        [-2, 2],
      ]),
    ).toBe(5);
  });
});
