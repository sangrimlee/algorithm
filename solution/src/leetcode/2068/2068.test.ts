import { checkAlmostEquivalent } from './2068';

describe('LeetCode 2068', () => {
  test('Example 1', () => {
    expect(checkAlmostEquivalent('aaaa', 'bccb')).toBe(false);
  });
  test('Example 2', () => {
    expect(checkAlmostEquivalent('abcdeef', 'abaaacc')).toBe(true);
  });
  test('Example 3', () => {
    expect(checkAlmostEquivalent('cccddabba', 'babababab')).toBe(true);
  });
});
