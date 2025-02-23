import { diagonalPrime } from './2614';

describe('LeetCode 2614', () => {
  test('Example 1', () => {
    expect(
      diagonalPrime([
        [1, 2, 3],
        [5, 6, 7],
        [9, 10, 11],
      ]),
    ).toBe(11);
  });
  test('Example 2', () => {
    expect(
      diagonalPrime([
        [1, 2, 3],
        [5, 17, 7],
        [9, 11, 10],
      ]),
    ).toBe(17);
  });
});
