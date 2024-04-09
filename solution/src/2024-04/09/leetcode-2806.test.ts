import { accountBalanceAfterPurchase } from './leetcode-2806';

describe('2024-04-09: LeetCode 2806', () => {
  test('Example 1', () => {
    expect(accountBalanceAfterPurchase(9)).toBe(90);
  });
  test('Example 2', () => {
    expect(accountBalanceAfterPurchase(15)).toBe(80);
  });
});
