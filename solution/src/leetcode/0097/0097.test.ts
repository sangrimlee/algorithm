import { isInterleave } from './0097';

describe('LeetCode 0097', () => {
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
