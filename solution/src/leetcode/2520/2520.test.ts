import { countDigits } from './2520';

describe('LeetCode 2520', () => {
  test('Example 1', () => {
    expect(countDigits(7)).toBe(1);
  });
  test('Example 2', () => {
    expect(countDigits(121)).toBe(2);
  });
  test('Example 3', () => {
    expect(countDigits(1248)).toBe(4);
  });
});
