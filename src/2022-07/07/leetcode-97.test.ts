import { isInterleave } from './leetcode-97';

describe('2022-07-07: LeetCode 97', () => {
  test('Example 1', () => {
    expect(isInterleave('aabcc', 'dbbca', 'aadbbcbcac')).toBeTruthy();
  });

  test('Example 2', () => {
    expect(isInterleave('aabcc', 'dbbca', 'aadbbbaccc')).toBeFalsy();
  });

  test('Example 3', () => {
    expect(isInterleave('', '', '')).toBeTruthy();
  });
});
