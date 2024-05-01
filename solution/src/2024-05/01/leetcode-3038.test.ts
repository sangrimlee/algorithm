import { maxOperations } from './leetcode-3038';

describe('2024-05-01: LeetCode 3038', () => {
  test('Example 1', () => {
    expect(maxOperations([3, 2, 1, 4, 5])).toBe(2);
  });
  test('Example 2', () => {
    expect(maxOperations([3, 2, 6, 1, 4])).toBe(1);
  });
});
