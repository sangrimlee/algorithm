import { isRectangleOverlap } from './leetcode-836';

describe('2023-10-30: LeetCode 836', () => {
  test('Example 1', () => {
    expect(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3])).toBe(true);
  });
  test('Example 2', () => {
    expect(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1])).toBe(false);
  });
  test('Example 3', () => {
    expect(isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3])).toBe(false);
  });
});
