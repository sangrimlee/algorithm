import { closeStrings } from './1657';

describe('LeetCode 1657', () => {
  test('Example 1', () => {
    const word1 = 'abc';
    const word2 = 'bca';
    expect(closeStrings(word1, word2)).toBeTruthy();
  });

  test('Example 2', () => {
    const word1 = 'a';
    const word2 = 'aa';
    expect(closeStrings(word1, word2)).toBeFalsy();
  });

  test('Example 3', () => {
    const word1 = 'cabbba';
    const word2 = 'abbccc';
    expect(closeStrings(word1, word2)).toBeTruthy();
  });
});
