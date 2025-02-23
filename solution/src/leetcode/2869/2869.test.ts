import { minOperations } from './2869';

describe('LeetCode 2869', () => {
  test('Example 1', () => {
    expect(minOperations([3, 1, 5, 4, 2], 2)).toBe(4);
  });
  test('Example 2', () => {
    expect(minOperations([3, 1, 5, 4, 2], 5)).toBe(5);
  });
  test('Example 3', () => {
    expect(minOperations([3, 2, 5, 3, 1], 3)).toBe(4);
  });
});
