import { shortestSubarray } from './leetcode-862';

describe('2024-11-17: LeetCode 862', () => {
  test('Example 1', () => {
    expect(shortestSubarray([1], 1)).toBe(1);
  });
  test('Example 2', () => {
    expect(shortestSubarray([1, 2], 4)).toBe(-1);
  });
  test('Example 3', () => {
    expect(shortestSubarray([2, -1, 2], 3)).toBe(3);
  });
});
