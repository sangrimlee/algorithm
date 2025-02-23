import { maxMoves } from './2684';

describe('LeetCode 2684', () => {
  test('Example 1', () => {
    expect(
      maxMoves([
        [2, 4, 3, 5],
        [5, 4, 9, 3],
        [3, 4, 2, 11],
        [10, 9, 13, 15],
      ]),
    ).toBe(3);
  });
  test('Example 2', () => {
    expect(
      maxMoves([
        [3, 2, 4],
        [2, 1, 9],
        [1, 1, 7],
      ]),
    ).toBe(0);
  });
});
