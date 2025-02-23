import { removeOccurrences } from './1910';

describe('LeetCode 1910', () => {
  test('Example 1', () => {
    expect(removeOccurrences('daabcbaabcbc', 'abc')).toBe('dab');
  });
  test('Example 2', () => {
    expect(removeOccurrences('axxxxyyyyb', 'xy')).toBe('ab');
  });
});
