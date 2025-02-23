import { findLUSlength } from './0521';

describe('LeetCode 0521', () => {
  test('Example 1', () => {
    expect(findLUSlength('aba', 'cdc')).toBe(3);
  });
  test('Example 2', () => {
    expect(findLUSlength('aaa', 'bbb')).toBe(3);
  });
  test('Example 3', () => {
    expect(findLUSlength('aaa', 'aaa')).toBe(-1);
  });
});
