import { zigzagTraversal } from './leetcode-3417';

describe('2025-01-14: LeetCode 3417', () => {
  test('Example 1', () => {
    expect(
      zigzagTraversal([
        [1, 2],
        [3, 4],
      ]),
    ).toEqual([1, 4]);
  });
  test('Example 2', () => {
    expect(
      zigzagTraversal([
        [2, 1],
        [2, 1],
        [2, 1],
      ]),
    ).toEqual([2, 1, 2]);
  });
  test('Example 3', () => {
    expect(
      zigzagTraversal([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([1, 3, 5, 7, 9]);
  });
});
