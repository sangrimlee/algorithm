import { maxProduct } from './1464';

describe('LeetCode 1464', () => {
  test('Example 1', () => {
    expect(maxProduct([3, 4, 5, 2])).toBe(12);
  });
  test('Example 2', () => {
    expect(maxProduct([1, 5, 4, 5])).toBe(16);
  });
  test('Example 3', () => {
    expect(maxProduct([3, 7])).toBe(12);
  });
});
