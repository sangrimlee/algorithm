import { minOperations } from './leetcode-3066';

describe('LeetCode 3066', () => {
  test('Example 1', () => {
    expect(minOperations([2, 11, 10, 1, 3], 10)).toBe(2);
  });
  test('Example 2', () => {
    expect(minOperations([1, 1, 2, 4, 9], 20)).toBe(4);
  });
});
