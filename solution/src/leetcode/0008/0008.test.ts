import { myAtoi } from './0008';

describe('LeetCode 0008', () => {
  test('Example 1', () => {
    expect(myAtoi('42')).toBe(42);
  });

  test('Example 2', () => {
    expect(myAtoi('   -42')).toBe(-42);
  });

  test('Example 3', () => {
    expect(myAtoi('4193 with words')).toBe(4193);
  });

  test('Example 4', () => {
    expect(myAtoi('   +0 123')).toBe(0);
  });

  test('Example 5', () => {
    expect(myAtoi('  0000000000012345678')).toBe(12345678);
  });

  test('Example 6', () => {
    expect(myAtoi('0  123')).toBe(0);
  });

  test('Example 7', () => {
    expect(myAtoi('  +  413')).toBe(0);
  });
});
