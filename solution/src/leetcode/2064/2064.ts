/**
 * 2064. Minimized Maximum of Products Distributed to Any Store
 * https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store
 */
export function minimizedMaximum(n: number, quantities: number[]): number {
  const maxQuantity = quantities.reduce((prev, quantity) => Math.max(prev, quantity), 0);

  let [start, end] = [1, maxQuantity];
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const sum = quantities.reduce(
      (acc, quantity) => acc + Math.floor((quantity + mid - 1) / mid),
      0,
    );
    if (n < sum) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}
