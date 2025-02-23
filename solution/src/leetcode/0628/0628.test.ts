import { maximumProduct } from './0628';

describe('LeetCode 0628', () => {
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
