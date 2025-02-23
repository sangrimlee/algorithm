import { sortString } from './1370';

describe('LeetCode 1370', () => {
  test('Example 1', () => {
    expect(sortString('aaaabbbbcccc')).toBe('abccbaabccba');
  });
  test('Example 2', () => {
    expect(sortString('rat')).toBe('art');
  });
});
