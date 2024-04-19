import { findChampion } from './leetcode-2923';

describe('2024-04-19: LeetCode 2923', () => {
  test('Example 1', () => {
    expect(
      findChampion([
        [0, 1],
        [0, 0],
      ]),
    ).toBe(0);
  });
  test('Example 2', () => {
    expect(
      findChampion([
        [0, 0, 1],
        [1, 0, 1],
        [0, 0, 0],
      ]),
    ).toBe(1);
  });
});
