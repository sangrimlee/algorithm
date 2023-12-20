/**
 * 1672. Richest Customer Wealth
 * https://leetcode.com/problems/richest-customer-wealth
 */
export function maximumWealth(accounts: number[][]): number {
  const sum = (arr: number[]) => arr.reduce((acc, num) => acc + num, 0);
  return accounts.reduce((prev, account) => Math.max(prev, sum(account)), 0);
}
