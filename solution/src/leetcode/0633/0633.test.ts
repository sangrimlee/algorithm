import { judgeSquareSum } from './0633';

describe('LeetCode 0633', () => {
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
