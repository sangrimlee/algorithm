import { maxAverageRatio } from './leetcode-1792';

describe('2024-12-15: LeetCode 1792', () => {
  test('Example 1', () => {
    expect(
      maxAverageRatio(
        [
          [1, 2],
          [3, 5],
          [2, 2],
        ],
        2,
      ),
    ).toBeCloseTo(0.78333);
  });
  test('Example 2', () => {
    expect(
      maxAverageRatio(
        [
          [2, 4],
          [3, 9],
          [4, 5],
          [2, 10],
        ],
        4,
      ),
    ).toBeCloseTo(0.53485);
  });
});
