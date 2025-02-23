import { removeKdigits } from './0402';

describe('LeetCode 0402', () => {
  test('Example 1', () => {
    expect(removeKdigits('1432219', 3)).toBe('1219');
  });
  test('Example 2', () => {
    expect(removeKdigits('10200', 1)).toBe('200');
  });
  test('Example 3', () => {
    expect(removeKdigits('10', 2)).toBe('0');
  });
});
