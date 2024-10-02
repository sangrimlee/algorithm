import { canArrange } from './leetcode-1497';

describe('2024-10-02: LeetCode 1497', () => {
  test('Example 1', () => {
    expect(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5)).toBe(true);
  });
  test('Example 2', () => {
    expect(canArrange([1, 2, 3, 4, 5, 6], 7)).toBe(true);
  });
  test('Example 3', () => {
    expect(canArrange([1, 2, 3, 4, 5, 6], 10)).toBe(false);
  });
  test('Example 4', () => {
    expect(canArrange([-1, 1, -2, 2, -3, 3, -4, 4], 3)).toBe(true);
  });
});
