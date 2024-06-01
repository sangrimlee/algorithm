import { findAndReplacePattern } from './leetcode-890';

describe('2024-06-01: LeetCode 890', () => {
  test('Example 1', () => {
    expect(findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb')).toEqual([
      'mee',
      'aqq',
    ]);
  });
  test('Example 2', () => {
    expect(findAndReplacePattern(['a', 'b', 'c'], 'a')).toEqual(['a', 'b', 'c']);
  });
});
