import { StockSpanner } from './0901';

describe('LeetCode 0901', () => {
  test('Example 1', () => {
    const stockSpanner = new StockSpanner();
    const prices = [100, 80, 60, 70, 60, 75, 85];

    expect(prices.map((price) => stockSpanner.next(price))).toEqual([1, 1, 1, 2, 1, 4, 6]);
  });
});
