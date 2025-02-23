import { rangeBitwiseAnd } from './0201';

describe('LeetCode 0201', () => {
  test('Example 1', () => {
    expect(rangeBitwiseAnd(5, 7)).toBe(4);
  });
  test('Example 2', () => {
    expect(rangeBitwiseAnd(0, 0)).toBe(0);
  });
  test('Example 3', () => {
    expect(rangeBitwiseAnd(1, 2147483647)).toBe(0);
  });
});
