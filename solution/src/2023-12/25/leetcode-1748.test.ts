import { sumOfUnique } from './leetcode-1748';

describe('2023-12-25: LeetCode 1748', () => {
  test('Example 1', () => {
    expect(sumOfUnique([1, 2, 3, 2])).toBe(4);
  });
  test('Example 2', () => {
    expect(sumOfUnique([1, 1, 1, 1, 1])).toBe(0);
  });
  test('Example 3', () => {
    expect(sumOfUnique([1, 2, 3, 4, 5])).toBe(15);
  });
});
