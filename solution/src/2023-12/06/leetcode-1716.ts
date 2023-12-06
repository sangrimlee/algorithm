/**
 * 1716. Calculate Money in Leetcode Bank
 * https://leetcode.com/problems/calculate-money-in-leetcode-bank
 */
export function totalMoney(n: number): number {
  const sigma = (n: number) => (n * (n + 1)) / 2;
  const week = Math.floor(n / 7);
  const remainDay = n % 7;
  const totalMoneyOfWeek = 28 * week + 7 * sigma(week - 1);
  const totalMoneyOfRemainDay = sigma(remainDay) + week * remainDay;
  return totalMoneyOfWeek + totalMoneyOfRemainDay;
}
