import { isArraySpecial } from './3151';

describe('LeetCode 3151', () => {
  test('Example 1', () => {
    expect(isArraySpecial([1])).toBe(true);
  });
  test('Example 2', () => {
    expect(isArraySpecial([2, 1, 4])).toBe(true);
  });
  test('Example 3', () => {
    expect(isArraySpecial([4, 3, 1, 6])).toBe(false);
  });
});
