import { numSubmatrixSumTarget } from './leetcode-1074';

describe('2024-01-28: LeetCode 1074', () => {
  test('Example 1', () => {
    expect(
      numSubmatrixSumTarget(
        [
          [0, 1, 0],
          [1, 1, 1],
          [0, 1, 0],
        ],
        0,
      ),
    ).toBe(4);
  });
  test('Example 2', () => {
    expect(
      numSubmatrixSumTarget(
        [
          [1, -1],
          [-1, 1],
        ],
        0,
      ),
    ).toBe(5);
  });
  test('Example 3', () => {
    expect(numSubmatrixSumTarget([[904]], 0)).toBe(0);
  });
});
