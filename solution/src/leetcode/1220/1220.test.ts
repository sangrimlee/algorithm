import { countVowelPermutation } from './1220';

describe('LeetCode 1220', () => {
  test('Example 1', () => {
    expect(countVowelPermutation(1)).toBe(5);
  });
  test('Example 2', () => {
    expect(countVowelPermutation(2)).toBe(10);
  });
  test('Example 3', () => {
    expect(countVowelPermutation(5)).toBe(68);
  });
});
