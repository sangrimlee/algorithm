import { judgeSquareSum } from './leetcode-633';

describe('2024-06-17: LeetCode 633', () => {
  test('Example 1', () => {
    expect(judgeSquareSum(5)).toBe(true);
  });
  test('Example 2', () => {
    expect(judgeSquareSum(3)).toBe(false);
  });
  test('Example 3', () => {
    expect(judgeSquareSum(4)).toBe(true);
  });
});
