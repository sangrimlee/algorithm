import { findGCD } from './leetcode-1979';

describe('2024-01-19: LeetCode 1979', () => {
  test('Example 1', () => {
    expect(findGCD([2, 5, 6, 9, 10])).toBe(2);
  });
  test('Example 2', () => {
    expect(findGCD([7, 5, 6, 8, 3])).toBe(1);
  });
  test('Example 3', () => {
    expect(findGCD([3, 3])).toBe(3);
  });
});
