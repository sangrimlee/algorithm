import { maxIceCream } from './leetcode-1833';

describe('2023-01-06: LeetCode 1833', () => {
  test('Example 1', () => {
    const costs = [1, 3, 2, 4, 1],
      coins = 7;
    expect(maxIceCream(costs, coins)).toBe(4);
  });

  test('Example 2', () => {
    const costs = [10, 6, 8, 7, 7, 8],
      coins = 5;
    expect(maxIceCream(costs, coins)).toBe(0);
  });

  test('Example 3', () => {
    const costs = [1, 6, 3, 1, 2, 5],
      coins = 20;
    expect(maxIceCream(costs, coins)).toBe(6);
  });
});
