import { triangleType } from './leetcode-3024';

describe('2024-04-29: LeetCode 3024', () => {
  test('Example 1', () => {
    expect(triangleType([3, 3, 3])).toBe('equilateral');
  });
  test('Example 2', () => {
    expect(triangleType([3, 4, 5])).toBe('scalene');
  });
});
