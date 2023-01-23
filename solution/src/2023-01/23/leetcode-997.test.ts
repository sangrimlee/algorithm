import { findJudge } from './leetcode-997';

describe('2023-01-23: LeetCode 997', () => {
  test('Example 1', () => {
    const n = 2,
      trust = [[1, 2]];
    expect(findJudge(n, trust)).toBe(2);
  });

  test('Example 2', () => {
    const n = 3,
      trust = [
        [1, 3],
        [2, 3],
      ];
    expect(findJudge(n, trust)).toBe(3);
  });

  test('Example 3', () => {
    const n = 3,
      trust = [
        [1, 3],
        [2, 3],
        [3, 1],
      ];
    expect(findJudge(n, trust)).toBe(-1);
  });

  test('Example 4', () => {
    expect(findJudge(1, [])).toBe(1);
  });
});
