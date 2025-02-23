import { uniquePaths } from './0062';

describe('LeetCode 0062', () => {
  test('Example 1', () => {
    expect(uniquePaths(3, 7)).toBe(28);
  });
  test('Example 2', () => {
    expect(uniquePaths(3, 2)).toBe(3);
  });
});
