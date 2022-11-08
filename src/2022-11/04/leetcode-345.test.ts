import { reverseVowels } from './leetcode-345';

describe('2022-11-04: Leetcode 345', () => {
  test('Example 1', () => {
    expect(reverseVowels('hello')).toBe('holle');
  });

  test('Example 2', () => {
    expect(reverseVowels('leetcode')).toBe('leotcede');
  });

  test('Example 3', () => {
    expect(reverseVowels('Aa')).toBe('aA');
  });
});
