import { minOperations } from './leetcode-2009';

describe('2023-10-10: LeetCode 2009', () => {
  test('Example 1', () => {
    expect(minOperations([4, 2, 5, 3])).toBe(0);
  });
  test('Example 2', () => {
    expect(minOperations([1, 2, 3, 5, 6])).toBe(1);
  });
  test('Example 3', () => {
    expect(minOperations([1, 10, 100, 1000])).toBe(3);
  });
});
