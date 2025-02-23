import { maxProfitIV } from './0188';

describe('LeetCode 0188', () => {
  test('Example 1', () => {
    expect(maxProfitIV(2, [2, 4, 1])).toBe(2);
  });

  test('Example 2', () => {
    expect(maxProfitIV(2, [3, 2, 6, 5, 0, 3])).toBe(7);
  });
});
