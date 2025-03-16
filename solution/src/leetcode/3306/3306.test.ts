import { countOfSubstrings } from './3306';

describe('LeetCode 3306', () => {
  test('Example 1', () => {
    expect(countOfSubstrings('aeioqq', 1)).toBe(0);
  });
  test('Example 2', () => {
    expect(countOfSubstrings('aeiou', 0)).toBe(1);
  });
  test('Example 3', () => {
    expect(countOfSubstrings('ieaouqqieaouqq', 1)).toBe(3);
  });
});
