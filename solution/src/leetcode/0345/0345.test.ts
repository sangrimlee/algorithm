import { reverseVowels } from './0345';

describe('LeetCode 0345', () => {
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
