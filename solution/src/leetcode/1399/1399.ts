/**
 * 1399. Count Largest Group
 * https://leetcode.com/problems/count-largest-group
 */
export function countLargestGroup(n: number): number {
  let groupCount = 0;
  let largestGroupSize = 0;
  const group = new Map<number, number>();
  for (let num = 1; num <= n; num++) {
    const sum = sumOfDigits(num);
    const groupSize = (group.get(sum) ?? 0) + 1;
    group.set(sum, groupSize);

    if (groupSize > largestGroupSize) {
      largestGroupSize = groupSize;
      groupCount = 1;
    } else if (groupSize === largestGroupSize) {
      groupCount += 1;
    }
  }
  return groupCount;
}

function sumOfDigits(num: number): number {
  let result = 0;
  let curr = num;
  while (curr > 0) {
    result += curr % 10;
    curr = Math.floor(curr / 10);
  }
  return result;
}
