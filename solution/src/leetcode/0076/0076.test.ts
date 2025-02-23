import { minWindow } from './0076';

describe('LeetCode 0076', () => {
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
