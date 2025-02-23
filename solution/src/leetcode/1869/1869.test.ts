import { checkZeroOnes } from './1869';

describe('LeetCode 1869', () => {
  test('Example 1', () => {
    expect(checkZeroOnes('1101')).toBe(true);
  });
  test('Example 2', () => {
    expect(checkZeroOnes('111000')).toBe(false);
  });
  test('Example 3', () => {
    expect(checkZeroOnes('110100010')).toBe(false);
  });
});
