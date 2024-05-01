import { wonderfulSubstrings } from './leetcode-1915';

describe('2024-04-30: LeetCode 1915', () => {
  test('Example 1', () => {
    expect(wonderfulSubstrings('aba')).toBe(4);
  });
  test('Example 2', () => {
    expect(wonderfulSubstrings('aabb')).toBe(9);
  });
  test('Example 3', () => {
    expect(wonderfulSubstrings('he')).toBe(2);
  });
});
