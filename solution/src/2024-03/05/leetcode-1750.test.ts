import { minimumLength } from './leetcode-1750';

describe('2024-03-05: LeetCode 1750', () => {
  test('Example 1', () => {
    expect(minimumLength('ca')).toBe(2);
  });
  test('Example 2', () => {
    expect(minimumLength('cabaabac')).toBe(0);
  });
  test('Example 3', () => {
    expect(minimumLength('aabccabba')).toBe(3);
  });
});
