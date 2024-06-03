import { appendCharacters } from './leetcode-2486';

describe('2024-06-03: LeetCode 2486', () => {
  test('Example 1', () => {
    expect(appendCharacters('coaching', 'coding')).toBe(4);
  });
  test('Example 2', () => {
    expect(appendCharacters('abcde', 'a')).toBe(0);
  });
  test('Example 3', () => {
    expect(appendCharacters('z', 'abcde')).toBe(5);
  });
});
