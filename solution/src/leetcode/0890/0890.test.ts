import { findAndReplacePattern } from './0890';

describe('LeetCode 0890', () => {
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
