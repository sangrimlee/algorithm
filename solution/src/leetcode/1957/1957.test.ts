import { makeFancyString } from './1957';

describe('LeetCode 1957', () => {
  test('Example 1', () => {
    expect(makeFancyString('leetcode')).toBe('leetcode');
  });
  test('Example 2', () => {
    expect(makeFancyString('aabaa')).toBe('aabaa');
  });
  test('Example 3', () => {
    expect(makeFancyString('aab')).toBe('aab');
  });
});
