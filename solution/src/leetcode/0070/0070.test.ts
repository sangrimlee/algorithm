import { climbStairs } from './0070';

describe('LeetCode 0070', () => {
  test('Example 1', () => {
    expect(climbStairs(2)).toBe(2);
  });

  test('Example 2', () => {
    expect(climbStairs(3)).toBe(3);
  });

  test('Example 3', () => {
    expect(climbStairs(1)).toBe(1);
  });

  test('Example 4', () => {
    expect(climbStairs(45)).toBe(1836311903);
  });
});
