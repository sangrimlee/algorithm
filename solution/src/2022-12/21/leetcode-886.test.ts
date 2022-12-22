import { possibleBipartition } from './leetcode-886';

describe('2022-12-21: LeetCode 886', () => {
  test('Example 1', () => {
    const n = 4,
      dislikes = [
        [1, 2],
        [1, 3],
        [2, 4],
      ];
    expect(possibleBipartition(n, dislikes)).toBeTruthy();
  });

  test('Example 2', () => {
    const n = 3,
      dislikes = [
        [1, 2],
        [1, 3],
        [2, 3],
      ];
    expect(possibleBipartition(n, dislikes)).toBeFalsy();
  });

  test('Example 3', () => {
    const n = 5,
      dislikes = [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [1, 5],
      ];
    expect(possibleBipartition(n, dislikes)).toBeFalsy();
  });
});
