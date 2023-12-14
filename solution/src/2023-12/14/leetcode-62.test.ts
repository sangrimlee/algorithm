import { uniquePaths } from './leetcode-62';

describe('2023-12-13: LeetCode 62', () => {
  test('Example 1', () => {
    expect(uniquePaths(3, 7)).toBe(28);
  });
  test('Example 2', () => {
    expect(uniquePaths(3, 2)).toBe(3);
  });
});
