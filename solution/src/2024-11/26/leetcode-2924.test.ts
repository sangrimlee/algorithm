import { findChampion } from './leetcode-2924';

describe('2024-11-26: LeetCode 2924', () => {
  test('Example 1', () => {
    expect(
      findChampion(3, [
        [0, 1],
        [1, 2],
      ]),
    ).toBe(0);
  });
  test('Example 2', () => {
    expect(
      findChampion(4, [
        [0, 2],
        [1, 3],
        [1, 2],
      ]),
    ).toBe(-1);
  });
});