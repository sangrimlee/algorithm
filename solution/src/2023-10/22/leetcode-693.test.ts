import { hasAlternatingBits } from './leetcode-693';

describe('2023-10-22: LeetCode 693', () => {
  test('Example 1', () => {
    expect(hasAlternatingBits(5)).toBe(true);
  });
  test('Example 2', () => {
    expect(hasAlternatingBits(7)).toBe(false);
  });
  test('Example 3', () => {
    expect(hasAlternatingBits(11)).toBe(false);
  });
});
