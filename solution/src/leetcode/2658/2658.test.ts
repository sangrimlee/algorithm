import { findMaxFish } from './2658';

describe('LeetCode 2658', () => {
  test('Example 1', () => {
    expect(
      findMaxFish([
        [0, 2, 1, 0],
        [4, 0, 0, 3],
        [1, 0, 0, 4],
        [0, 3, 2, 0],
      ]),
    ).toBe(7);
  });
  test('Example 2', () => {
    expect(
      findMaxFish([
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 1],
      ]),
    ).toBe(1);
  });
});
