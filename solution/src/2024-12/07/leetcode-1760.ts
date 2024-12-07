/**
 * 1760. Minimum Limit of Balls in a Bag
 * https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag
 */
export function minimumSize(nums: number[], maxOperations: number): number {
  const maxNum = nums.reduce((prev, num) => Math.max(prev, num), 0);

  let [left, right] = [1, maxNum];
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const operations = nums.reduce((acc, num) => acc + getOperation(num, mid), 0);
    if (maxOperations < operations) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

function getOperation(num: number, maxPenalty: number) {
  return Math.floor((num - 1) / maxPenalty);
}
