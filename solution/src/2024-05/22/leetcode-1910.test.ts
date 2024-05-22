import { removeOccurrences } from './leetcode-1910';

describe('2024-05-22: LeetCode 1910', () => {
  test('Example 1', () => {
    expect(removeOccurrences('daabcbaabcbc', 'abc')).toBe('dab');
  });
  test('Example 2', () => {
    expect(removeOccurrences('axxxxyyyyb', 'xy')).toBe('ab');
  });
});
