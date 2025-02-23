import { maxVowels } from './1456';

describe('LeetCode 1456', () => {
  test('Example 1', () => {
    expect(maxVowels('abciiidef', 3)).toBe(3);
  });
  test('Example 2', () => {
    expect(maxVowels('aeiou', 2)).toBe(2);
  });
  test('Example 3', () => {
    expect(maxVowels('leetcode', 3)).toBe(2);
  });
});
