import { longestPath } from './leetcode-2246';

describe('2023-01-13: LeetCode 2246', () => {
  test('Example 1', () => {
    const parent = [-1, 0, 0, 1, 1, 2],
      s = 'abacbe';
    expect(longestPath(parent, s)).toBe(3);
  });

  test('Example 2', () => {
    const parent = [-1, 0, 0, 0],
      s = 'aabc';
    expect(longestPath(parent, s)).toBe(3);
  });

  test('Example 3', () => {
    const parent = [-1, 0, 1],
      s = 'aab';
    expect(longestPath(parent, s)).toBe(2);
  });
});
