import { countKConstraintSubstrings } from './leetcode-3258';

describe('2024-08-18: LeetCode 3258', () => {
  test('Example 1', () => {
    expect(countKConstraintSubstrings('10101', 1)).toBe(12);
  });
  test('Example 2', () => {
    expect(countKConstraintSubstrings('1010101', 2)).toBe(25);
  });
  test('Example 3', () => {
    expect(countKConstraintSubstrings('11111', 1)).toBe(15);
  });
});
