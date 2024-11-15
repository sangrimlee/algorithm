import { findLengthOfShortestSubarray } from './leetcode-1574';

describe('2024-11-15: LeetCode 1574', () => {
  test('Example 1', () => {
    expect(findLengthOfShortestSubarray([1, 2, 3, 10, 4, 2, 3, 5])).toBe(3);
  });
  test('Example 2', () => {
    expect(findLengthOfShortestSubarray([5, 4, 3, 2, 1])).toBe(4);
  });
  test('Example 3', () => {
    expect(findLengthOfShortestSubarray([1, 2, 3])).toBe(0);
  });
  test('Example 4', () => {
    expect(findLengthOfShortestSubarray([2, 2, 2, 1, 1, 1])).toBe(3);
  });
});
