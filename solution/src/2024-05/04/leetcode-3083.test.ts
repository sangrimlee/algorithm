import { isSubstringPresent } from './leetcode-3083';

describe('2024-05-04: LeetCode 3083', () => {
  test('Example 1', () => {
    expect(isSubstringPresent('leetcode')).toBe(true);
  });
  test('Example 2', () => {
    expect(isSubstringPresent('abcba')).toBe(true);
  });
  test('Example 3', () => {
    expect(isSubstringPresent('abcd')).toBe(false);
  });
});
