import { guess, guessNumber } from './leetcode-374';

describe('2022-11-16: leetcode.test', () => {
  test('Example 1', () => {
    const n = 10,
      pick = 6;
    expect(guessNumber(n, guess(pick))).toBe(pick);
  });

  test('Example 2', () => {
    const n = 1,
      pick = 1;
    expect(guessNumber(n, guess(pick))).toBe(pick);
  });

  test('Example 3', () => {
    const n = 2,
      pick = 1;
    expect(guessNumber(n, guess(pick))).toBe(pick);
  });
});
