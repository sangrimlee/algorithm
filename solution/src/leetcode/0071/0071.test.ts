import { simplifyPath } from './0071';

describe('LeetCode 0071', () => {
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
