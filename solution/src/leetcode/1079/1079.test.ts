import { numTilePossibilities } from './1079';

describe('LeetCode 1079', () => {
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
