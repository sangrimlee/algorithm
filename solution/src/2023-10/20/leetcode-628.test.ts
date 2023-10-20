import { maximumProduct } from './leetcode-628';

describe('2023-10-20: LeetCode 628', () => {
  test('Example 1', () => {
    expect(maximumProduct([1, 2, 3])).toBe(6);
  });
  test('Example 2', () => {
    expect(maximumProduct([1, 2, 3, 4])).toBe(24);
  });
  test('Example 3', () => {
    expect(maximumProduct([-1, -2, -3])).toBe(-6);
  });
});
