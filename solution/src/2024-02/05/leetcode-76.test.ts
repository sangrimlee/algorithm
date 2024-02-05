import { minWindow } from './leetcode-76';

describe('2024-02-05: LeetCode 76', () => {
  test('Example 1', () => {
    expect(minWindow('ADOBECODEBANC', 'ABC')).toBe('BANC');
  });
  test('Example 2', () => {
    expect(minWindow('a', 'a')).toBe('a');
  });
  test('Example 3', () => {
    expect(minWindow('a', 'aa')).toBe('');
  });
});
