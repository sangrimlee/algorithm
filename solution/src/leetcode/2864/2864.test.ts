import { maximumOddBinaryNumber } from './2864';

describe('LeetCode 2864', () => {
  test('Example 1', () => {
    expect(maximumOddBinaryNumber('010')).toBe('001');
  });
  test('Example 2', () => {
    expect(maximumOddBinaryNumber('0101')).toBe('1001');
  });
});
