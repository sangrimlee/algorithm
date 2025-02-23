import { maxDotProduct } from './1458';

describe('LeetCode 1458', () => {
  test('Example 1', () => {
    expect(maxDotProduct([2, 1, -2, 5], [3, 0, -6])).toBe(18);
  });
  test('Example 2', () => {
    expect(maxDotProduct([3, -2], [2, -6, 7])).toBe(21);
  });
  test('Example 3', () => {
    expect(maxDotProduct([-1, -1], [1, 1])).toBe(-1);
  });
});
