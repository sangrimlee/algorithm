import { minDistance } from './0583';

describe('LeetCode 0583', () => {
  test('Example 1', () => {
    expect(minDistance('sea', 'eat')).toBe(2);
  });

  test('Example 2', () => {
    expect(minDistance('leetcode', 'etco')).toBe(4);
  });

  test('Example 3', () => {
    expect(minDistance('leetcode', 'codlee')).toBe(6);
  });
});
