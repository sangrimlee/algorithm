import { checkPerfectNumber } from './0507';

describe('LeetCode 0507', () => {
  test('Example 1', () => {
    expect(checkPerfectNumber(28)).toBe(true);
  });
  test('Example 2', () => {
    expect(checkPerfectNumber(7)).toBe(false);
  });
  test('Example 3', () => {
    expect(checkPerfectNumber(1)).toBe(false);
  });
  test('Example 4', () => {
    expect(checkPerfectNumber(2)).toBe(false);
  });
});
