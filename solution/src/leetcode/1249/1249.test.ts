import { minRemoveToMakeValid } from './1249';

describe('LeetCode 1249', () => {
  test('Example 1', () => {
    expect(minRemoveToMakeValid('lee(t(c)o)de)')).toBe('lee(t(c)o)de');
  });
  test('Example 2', () => {
    expect(minRemoveToMakeValid('a)b(c)d')).toBe('ab(c)d');
  });
  test('Example 3', () => {
    expect(minRemoveToMakeValid('))((')).toBe('');
  });
});
