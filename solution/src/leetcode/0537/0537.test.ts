import { complexNumberMultiply } from './0537';

describe('LeetCode 0537', () => {
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
