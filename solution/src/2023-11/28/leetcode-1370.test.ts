import { sortString } from './leetcode-1370';

describe('2023-11-28: LeetCode 1370', () => {
  test('Example 1', () => {
    expect(sortString('aaaabbbbcccc')).toBe('abccbaabccba');
  });
  test('Example 2', () => {
    expect(sortString('rat')).toBe('art');
  });
});
