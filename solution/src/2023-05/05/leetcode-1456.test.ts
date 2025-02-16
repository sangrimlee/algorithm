import { maxVowels } from './leetcode-1456';

describe('2023-05-05: LeetCode 1456', () => {
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
