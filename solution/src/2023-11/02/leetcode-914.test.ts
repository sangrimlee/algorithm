import { hasGroupsSizeX } from './leetcode-914';

describe('2023-11-02: LeetCode 914', () => {
  test('Example 1', () => {
    expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true);
  });
  test('Example 2', () => {
    expect(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false);
  });
});
