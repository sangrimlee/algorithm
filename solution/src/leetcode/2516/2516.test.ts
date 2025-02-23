import { takeCharacters } from './2516';

describe('LeetCode 2516', () => {
  test('Example 1', () => {
    expect(takeCharacters('aabaaaacaabc', 2)).toBe(8);
  });
  test('Example 2', () => {
    expect(takeCharacters('a', 1)).toBe(-1);
  });
});
