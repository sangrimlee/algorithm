import { countPrimeSetBits } from './0762';

describe('LeetCode 0762', () => {
  test('Example 1', () => {
    expect(countPrimeSetBits(6, 10)).toBe(4);
  });
  test('Example 2', () => {
    expect(countPrimeSetBits(10, 15)).toBe(5);
  });
});
