import { numberOfWeakCharacters } from './1996';

describe('LeetCode 1996', () => {
  test('Example 1', () => {
    expect(
      numberOfWeakCharacters([
        [5, 5],
        [6, 3],
        [3, 6],
      ]),
    ).toBe(0);
  });

  test('Example 2', () => {
    expect(
      numberOfWeakCharacters([
        [2, 2],
        [3, 3],
      ]),
    ).toBe(1);
  });

  test('Example 3', () => {
    expect(
      numberOfWeakCharacters([
        [1, 5],
        [10, 4],
        [4, 3],
      ]),
    ).toBe(1);
  });

  test('Example 4', () => {
    expect(
      numberOfWeakCharacters([
        [1, 1],
        [2, 1],
        [2, 2],
        [1, 2],
      ]),
    ).toBe(1);
  });
});
