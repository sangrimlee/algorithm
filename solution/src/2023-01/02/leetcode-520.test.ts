import { detectCapitalUse } from './leetcode-520';

describe('2023-01-02: LeetCode 520', () => {
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
