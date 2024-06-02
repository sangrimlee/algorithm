import { numTilePossibilities } from './leetcode-1079';

describe('2024-06-02: LeetCode 1079', () => {
  test('Example 1', () => {
    expect(numTilePossibilities('AAB')).toBe(8);
  });
  test('Example 2', () => {
    expect(numTilePossibilities('AAABBC')).toBe(188);
  });
  test('Example 3', () => {
    expect(numTilePossibilities('V')).toBe(1);
  });
});
