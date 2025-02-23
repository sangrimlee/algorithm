import { shiftingLetters } from './2381';

describe('LeetCode 2381', () => {
  test('Example 1', () => {
    expect(
      shiftingLetters('abc', [
        [0, 1, 0],
        [1, 2, 1],
        [0, 2, 1],
      ]),
    ).toBe('ace');
  });
  test('Example 2', () => {
    expect(
      shiftingLetters('dztz', [
        [0, 0, 0],
        [1, 1, 1],
      ]),
    ).toBe('catz');
  });
  test('Example 3', () => {
    expect(
      shiftingLetters('xuwdbdqik', [
        [4, 8, 0],
        [4, 4, 0],
        [2, 4, 0],
        [2, 4, 0],
        [6, 7, 1],
        [2, 2, 1],
        [0, 2, 1],
        [8, 8, 0],
        [1, 3, 1],
      ]),
    ).toBe('ywxcxcqii');
  });
});
