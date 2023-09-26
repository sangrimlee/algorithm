import { isPerfectSquare } from './leetcode-367';

describe('2023-09-27: LeetCode 367', () => {
  test('Example 1', () => {
    expect(isPerfectSquare(16)).toBe(true);
  });
  test('Example 2', () => {
    expect(isPerfectSquare(14)).toBe(false);
  });
});
