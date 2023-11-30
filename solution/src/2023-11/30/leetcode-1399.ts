/**
 * 1399. Count Largest Group
 * https://leetcode.com/problems/count-largest-group
 */
export function countLargestGroup(n: number): number {
  const sumOfDigits = (n: number) => {
    return [...n.toString()].reduce((sum, digit) => sum + +digit, 0);
  };
  const groups = new Map<number, number>();
  let largestGroupSize = 0;
  for (let i = 1; i <= n; i++) {
    const group = sumOfDigits(i);
    const groupSize = (groups.get(group) ?? 0) + 1;
    groups.set(group, groupSize);
    largestGroupSize = Math.max(groupSize, largestGroupSize);
  }

  return [...groups.values()].filter((groupSize) => groupSize === largestGroupSize).length;
}
