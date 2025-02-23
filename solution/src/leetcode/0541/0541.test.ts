import { reverseStr } from './0541';

describe('LeetCode 0541', () => {
  test('Example 1', () => {
    expect(reverseStr('abcdefg', 2)).toBe('bacdfeg');
  });
  test('Example 2', () => {
    expect(reverseStr('abcd', 2)).toBe('bacd');
  });
  test('Example 3', () => {
    expect(reverseStr('abcdefg', 8)).toBe('gfedcba');
  });
  test('Example 4', () => {
    expect(
      reverseStr(
        'hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl',
        39,
      ),
    ).toBe(
      'fdcqkmxwholhytmhafpesaentdvxginrjlyqzyhehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqllgsqddebemjanqcqnfkjmi',
    );
  });
});
