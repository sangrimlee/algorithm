import { wordSubsets } from './0916';

describe('LeetCode 0916', () => {
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
