import { countPrimeSetBits } from './leetcode-762';

describe('2023-10-26: LeetCode 762', () => {
  test('Example 1', () => {
    expect(countPrimeSetBits(6, 10)).toBe(4);
  });
  test('Example 2', () => {
    expect(countPrimeSetBits(10, 15)).toBe(5);
  });
});
