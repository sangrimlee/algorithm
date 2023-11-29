import { hammingWeight } from './leetcode-191';

describe('2023-11-29: LeetCode 191', () => {
  test('Example 1', () => {
    const n = parseInt('00000000000000000000000000001011', 2);
    expect(hammingWeight(n)).toBe(3);
  });
  test('Example 2', () => {
    const n = parseInt('00000000000000000000000010000000', 2);
    expect(hammingWeight(n)).toBe(1);
  });
  test('Example 3', () => {
    const n = parseInt('11111111111111111111111111111101', 2);
    expect(hammingWeight(n)).toBe(31);
  });
});
