import { takeCharacters } from './leetcode-2516';

describe('2024-11-20: LeetCode 2516', () => {
  test('Example 1', () => {
    expect(takeCharacters('aabaaaacaabc', 2)).toBe(8);
  });
  test('Example 2', () => {
    expect(takeCharacters('a', 1)).toBe(-1);
  });
});
