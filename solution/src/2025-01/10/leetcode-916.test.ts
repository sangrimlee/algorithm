import { wordSubsets } from './leetcode-916';

describe('2025-01-10: LeetCode 916', () => {
  test('Example 1', () => {
    expect(wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['e', 'o'])).toEqual([
      'facebook',
      'google',
      'leetcode',
    ]);
  });
  test('Example 2', () => {
    expect(wordSubsets(['amazon', 'apple', 'facebook', 'google', 'leetcode'], ['l', 'e'])).toEqual([
      'apple',
      'google',
      'leetcode',
    ]);
  });
});
