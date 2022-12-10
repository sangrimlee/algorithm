import { maxProfitIV } from './leetcode-188';

describe('2022-09-10: LeetCode 188', () => {
  test('Example 1', () => {
    expect(maxProfitIV(2, [2, 4, 1])).toBe(2);
  });

  test('Example 2', () => {
    expect(maxProfitIV(2, [3, 2, 6, 5, 0, 3])).toBe(7);
  });
});
