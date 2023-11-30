import { findLucky } from './leetcode-1394';

describe('2023-11-30: LeetCode 1394', () => {
  test('Example 1', () => {
    expect(findLucky([2, 2, 3, 4])).toBe(2);
  });
  test('Example 2', () => {
    expect(findLucky([1, 2, 2, 3, 3, 3])).toBe(3);
  });
  test('Example 3', () => {
    expect(findLucky([2, 2, 2, 3, 3])).toBe(-1);
  });
});
