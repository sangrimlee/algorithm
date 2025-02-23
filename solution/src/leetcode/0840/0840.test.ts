import { numMagicSquaresInside } from './0840';

describe('LeetCode 0840', () => {
  test('Example 1', () => {
    expect(
      numMagicSquaresInside([
        [4, 3, 8, 4],
        [9, 5, 1, 9],
        [2, 7, 6, 2],
      ]),
    ).toBe(1);
  });
  test('Example 2', () => {
    expect(numMagicSquaresInside([[8]])).toBe(0);
  });
});
