import { lengthOfLIS } from './leetcode-300';

describe('2024-02-12: LeetCode 300', () => {
  test('Example 1', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  });
  test('Example 2', () => {
    expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toBe(4);
  });
  test('Example 3', () => {
    expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])).toBe(1);
  });
});
