import { findChampion } from './2923';

describe('LeetCode 2923', () => {
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
