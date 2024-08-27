import { maxProbability } from './leetcode-1514';

describe('2024-08-27: LeetCode 1514', () => {
  test('Example 1', () => {
    expect(
      maxProbability(
        3,
        [
          [0, 1],
          [1, 2],
          [0, 2],
        ],
        [0.5, 0.5, 0.2],
        0,
        2,
      ),
    ).toBeCloseTo(0.25);
  });
  test('Example 2', () => {
    expect(
      maxProbability(
        3,
        [
          [0, 1],
          [1, 2],
          [0, 2],
        ],
        [0.5, 0.5, 0.3],
        0,
        2,
      ),
    ).toBeCloseTo(0.3);
  });
  test('Example 3', () => {
    expect(maxProbability(3, [[0, 1]], [0.5], 0, 2)).toBeCloseTo(0.0);
  });
});
