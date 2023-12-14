import { simplifyPath } from './leetcode-71';

describe('2023-12-13: LeetCode 71', () => {
  test('Example 1', () => {
    expect(simplifyPath('/home/')).toBe('/home');
  });
  test('Example 2', () => {
    expect(simplifyPath('/../')).toBe('/');
  });
  test('Example 3', () => {
    expect(simplifyPath('/home//foo/')).toBe('/home/foo');
  });
});
