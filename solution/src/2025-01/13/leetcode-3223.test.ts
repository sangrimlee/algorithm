import { minimumLength } from './leetcode-3223';

describe('2025-01-13: LeetCode 3223', () => {
  test('Example 1', () => {
    expect(minimumLength('abaacbcbb')).toBe(5);
  });
  test('Example 2', () => {
    expect(minimumLength('aa')).toBe(2);
  });
});
