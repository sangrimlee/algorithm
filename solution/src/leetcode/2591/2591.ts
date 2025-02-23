/**
 * 2591. Distribute Money to Maximum Children
 * https://leetcode.com/problems/distribute-money-to-maximum-children
 */
export function distMoney(money: number, children: number): number {
  const remainMoney = money - children;
  if (remainMoney < 0) {
    return -1;
  }
  const maxDistMoney = Math.floor(remainMoney / 7);
  if (maxDistMoney === children && remainMoney % 7 === 0) {
    return children;
  }
  if (maxDistMoney === children - 1 && remainMoney % 7 === 3) {
    return children - 2;
  }
  return Math.min(children - 1, maxDistMoney);
}
