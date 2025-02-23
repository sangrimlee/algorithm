import { maxProfit } from './0714';

describe('LeetCode 0714', () => {
  test('Example 1', () => {
    expect(maxProfit([1, 3, 2, 8, 4, 9], 2)).toBe(8);
  });
  test('Example 2', () => {
    expect(maxProfit([1, 3, 7, 5, 10, 3], 3)).toBe(6);
  });
});
