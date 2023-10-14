import { findLUSlength } from './leetcode-521';

describe('2023-10-14: LeetCode 521', () => {
  test('Example 1', () => {
    expect(findLUSlength('aba', 'cdc')).toEqual(3);
  });
  test('Example 2', () => {
    expect(findLUSlength('aaa', 'bbb')).toEqual(3);
  });
  test('Example 3', () => {
    expect(findLUSlength('aaa', 'aaa')).toEqual(-1);
  });
});
