/**
 * 2806. Account Balance After Rounded Purchase
 * https://leetcode.com/problems/account-balance-after-rounded-purchase
 */
export function accountBalanceAfterPurchase(purchaseAmount: number): number {
  const roundedAmount = Math.round(purchaseAmount / 10) * 10;
  return 100 - roundedAmount;
}
