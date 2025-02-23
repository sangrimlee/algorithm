import { detectCapitalUse } from './0520';

describe('LeetCode 0520', () => {
  test('Example 1', () => {
    const word = 'USA';
    expect(detectCapitalUse(word)).toBeTruthy();
  });

  test('Example 2', () => {
    const word = 'FlaG';
    expect(detectCapitalUse(word)).toBeFalsy();
  });

  test('Example 3', () => {
    const word = 'Google';
    expect(detectCapitalUse(word)).toBeTruthy();
  });

  test('Example 4', () => {
    const word = 'FFFFFFFFFFFFFFFFFFFFf';
    expect(detectCapitalUse(word)).toBeFalsy();
  });
});
