import { findMiddleIndex } from './leetcode-1991';

describe('2024-01-19: LeetCode 1991', () => {
  test('Example 1', () => {
    expect(findMiddleIndex([2, 3, -1, 8, 4])).toBe(3);
  });
  test('Example 2', () => {
    expect(findMiddleIndex([1, -1, 4])).toBe(2);
  });
  test('Example 3', () => {
    expect(findMiddleIndex([2, 5])).toBe(-1);
  });
});
