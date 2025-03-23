import { puzzleGameChallenge } from './340212';

describe('Programmers 340212', () => {
  test('Example 1', () => {
    expect(puzzleGameChallenge([1, 5, 3], [2, 4, 7], 30)).toBe(3);
  });
  test('Example 2', () => {
    expect(puzzleGameChallenge([1, 4, 4, 2], [6, 3, 8, 2], 59)).toBe(2);
  });
  test('Example 3', () => {
    expect(puzzleGameChallenge([1, 328, 467, 209, 54], [2, 7, 1, 4, 3], 1723)).toBe(294);
  });
  test('Example 4', () => {
    expect(
      puzzleGameChallenge([1, 99999, 100000, 99995], [9999, 9001, 9999, 9001], 3456789012),
    ).toBe(39354);
  });
});
