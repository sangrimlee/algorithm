/**
 * 1359. Count All Valid Pickup and Delivery Options
 * https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options
 */
export function countOrders(n: number): number {
  const MOD = 10 ** 9 + 7;

  let answer = 1;
  for (let i = 2; i <= n; i++) {
    answer = (answer * (2 * i - 1) * i) % MOD;
  }

  return answer;
}
