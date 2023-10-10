import { findMaxConsecutiveOnes } from './leetcode-485';

describe('2023-10-10: LeetCode 485', () => {
  test('Example 1', () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
  });
  test('Example 2', () => {
    expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2);
  });
});
