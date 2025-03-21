import { titleToNumber } from './0171';

describe('LeetCode 0171', () => {
  test('Example 1', () => {
    expect(titleToNumber('FXSHRXW')).toBe(2147483647);
  });
  test('Example 2', () => {
    expect(titleToNumber('A')).toBe(1);
  });
  test('Example 3', () => {
    expect(titleToNumber('AB')).toBe(28);
  });
  test('Example 4', () => {
    expect(titleToNumber('ZY')).toBe(701);
  });
});
