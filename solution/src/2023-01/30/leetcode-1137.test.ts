import { tribonacci } from './leetcode-1137';

describe('2023-01-30: LeetCode 1137', () => {
  test('Example 1', () => {
    expect(tribonacci(4)).toBe(4);
  });

  test('Example 2', () => {
    expect(tribonacci(25)).toBe(1389537);
  });

  test('Example 3', () => {
    expect(tribonacci(0)).toBe(0);
    expect(tribonacci(1)).toBe(1);
    expect(tribonacci(2)).toBe(1);
  });
});
