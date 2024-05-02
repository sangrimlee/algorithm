import { minOperations } from './leetcode-3065';

describe('2024-05-02: LeetCode 3065', () => {
  test('Example 1', () => {
    expect(minOperations([2, 11, 10, 1, 3], 10)).toBe(3);
  });
  test('Example 2', () => {
    expect(minOperations([1, 1, 2, 4, 9], 1)).toBe(0);
  });
  test('Example 3', () => {
    expect(minOperations([1, 1, 2, 4, 9], 9)).toBe(4);
  });
});
