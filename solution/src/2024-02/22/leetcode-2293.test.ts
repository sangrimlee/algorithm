import { minMaxGame } from './leetcode-2293';

describe('2024-02-22: LeetCode 2293', () => {
  test('Example 1', () => {
    expect(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2])).toBe(1);
  });
  test('Example 2', () => {
    expect(minMaxGame([3])).toBe(3);
  });
});
