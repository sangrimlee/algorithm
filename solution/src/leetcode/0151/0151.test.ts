import { reverseWords } from './0151';

describe('LeetCode 0151', () => {
  test('Example 1', () => {
    const s = 'the sky is blue';
    expect(reverseWords(s)).toBe('blue is sky the');
  });

  test('Example 2', () => {
    const s = '  hello world  ';
    expect(reverseWords(s)).toBe('world hello');
  });

  test('Example 3', () => {
    const s = 'a good   example';
    expect(reverseWords(s)).toBe('example good a');
  });
});
