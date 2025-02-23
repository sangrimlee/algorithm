import { findShortestSubArray } from './0697';

describe('LeetCode 0697', () => {
  test('Example 1', () => {
    expect(findShortestSubArray([1, 2, 2, 3, 1])).toBe(2);
  });
  test('Example 2', () => {
    expect(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])).toBe(6);
  });
});
