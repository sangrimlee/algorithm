import { largestNumber } from './leetcode-179';

describe('2024-01-23: LeetCode 179', () => {
  test('Example 1', () => {
    expect(largestNumber([10, 2])).toBe('210');
  });
  test('Example 2', () => {
    expect(largestNumber([3, 30, 34, 5, 9])).toBe('9534330');
  });
  test('Example 3', () => {
    expect(largestNumber([0, 0, 0, 0])).toBe('0');
  });
});
