import { isIsomorphic } from './leetcode-205';

describe('2024-04-02: LeetCode 205', () => {
  test('Example 1', () => {
    expect(isIsomorphic('egg', 'add')).toBe(true);
  });
  test('Example 2', () => {
    expect(isIsomorphic('foo', 'bar')).toBe(false);
  });
  test('Example 3', () => {
    expect(isIsomorphic('paper', 'title')).toBe(true);
  });
});
