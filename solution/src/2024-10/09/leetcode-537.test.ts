import { complexNumberMultiply } from './leetcode-537';

describe('2024-10-09: LeetCode 537', () => {
  test('Example 1', () => {
    expect(complexNumberMultiply('1+1i', '1+1i')).toBe('0+2i');
  });
  test('Example 2', () => {
    expect(complexNumberMultiply('1+-1i', '1+-1i')).toBe('0+-2i');
  });
  test('Example 3', () => {
    expect(complexNumberMultiply('1+-1i', '0+0i')).toBe('0+0i');
  });
});
