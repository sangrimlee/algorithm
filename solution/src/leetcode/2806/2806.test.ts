import { accountBalanceAfterPurchase } from './2806';

describe('LeetCode 2806', () => {
  test('Example 1', () => {
    expect(accountBalanceAfterPurchase(9)).toBe(90);
  });
  test('Example 2', () => {
    expect(accountBalanceAfterPurchase(15)).toBe(80);
  });
});
