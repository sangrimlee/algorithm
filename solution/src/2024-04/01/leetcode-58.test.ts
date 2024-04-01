import { lengthOfLastWord } from './leetcode-58';

describe('2024-04-01: LeetCode 58', () => {
  test('Example 1', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5);
  });
  test('Example 2', () => {
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4);
  });
  test('Example 3', () => {
    expect(lengthOfLastWord('luffy is still joyboy')).toBe(6);
  });
  test('Example 4', () => {
    expect(lengthOfLastWord('hello')).toBe(5);
  });
});
