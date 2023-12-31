import { minOperations } from './leetcode-1827';

describe('2023-12-31: LeetCode 1827', () => {
  test('Example 1', () => {
    expect(minOperations([1, 1, 1])).toBe(3);
  });
  test('Example 2', () => {
    expect(minOperations([1, 5, 2, 4, 1])).toBe(14);
  });
  test('Example 3', () => {
    expect(minOperations([8])).toBe(0);
  });
});
