import { longestOnes } from './leetcode-1004';

describe('2023-07-24: LeetCode 1004', () => {
  test('Example 1', () => {
    expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6);
  });
  test('Example 2', () => {
    expect(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)).toBe(10);
  });
});
