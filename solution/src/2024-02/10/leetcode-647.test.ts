import { countSubstrings } from './leetcode-647';

describe('2024-02-10: LeetCode 647', () => {
  test('Example 1', () => {
    expect(countSubstrings('abc')).toBe(3);
  });
  test('Example 2', () => {
    expect(countSubstrings('aaa')).toBe(6);
  });
});
