import { maxKDivisibleComponents } from './leetcode-2872';

describe('2024-12-21: LeetCode 2872', () => {
  test('Example 1', () => {
    expect(
      maxKDivisibleComponents(
        5,
        [
          [0, 2],
          [1, 2],
          [1, 3],
          [2, 4],
        ],
        [1, 8, 1, 4, 4],
        6,
      ),
    ).toBe(2);
  });
  test('Example 2', () => {
    expect(
      maxKDivisibleComponents(
        7,
        [
          [0, 1],
          [0, 2],
          [1, 3],
          [1, 4],
          [2, 5],
          [2, 6],
        ],
        [3, 0, 6, 1, 5, 2, 1],
        3,
      ),
    ).toBe(3);
  });
});
